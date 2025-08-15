import { FlatTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DynamicDataSource, getLevel, isExpandable, hasChild, DynamicFlatNode, TREE_SERVICE, TreeService } from './dynamic-data-source';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sortable-tree',
  templateUrl: './sortable-tree.component.html',
  styleUrls: ['./sortable-tree.component.css']
})
export class SortableTreeComponent {
  @Input() multiple: boolean = true
  @Output() onTreeSelect: EventEmitter<DynamicFlatNode[]> = new EventEmitter<DynamicFlatNode[]>()

  dataSource!: DynamicDataSource;
  selectedNode: any;

  constructor(
    @Inject(TREE_SERVICE) public treeService: TreeService
  ) { }
  ngOnInit(): void {
    console.log(this.treeService)
    this.dataSource = new DynamicDataSource(this.treeControl, this.treeService);
    this.treeService.initialData().subscribe(res => {
      this.dataSource.data = res
    })
  }

  hasChild = (_: number, node: DynamicFlatNode) => node.expandable;


  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );



  dragging = false;
  expandTimeout: any;
  expandDelay = 1000;
  validateDrop = false;
  expansionModel = new SelectionModel<string>(true);
  drop(event: any) {
    console.log('origin/destination', event.previousIndex, event.currentIndex, event);

    // ignore drops outside of the tree
    if (!event.isPointerOverContainer) return;

    // deep clone the data source so we can mutate it
    const changedData = JSON.parse(JSON.stringify(this.dataSource.data));
    const node_ = changedData[event.previousIndex]
    const nodeAtDest: any = this.dataSource.data[event.currentIndex];
    if (node_.parentId !== nodeAtDest.parentId) {
      alert('仅允许同一层级排序');
      return;
    }
    // recursive find function to find siblings of node
    function findNodeSiblings(
      arr: Array<any>,
      id: string
    ): Array<any> | undefined {
      let result, subResult;
      arr.forEach((item, i) => {
        if (item.id === id) {
          result = arr;
        } else if (item.children) {
          subResult = findNodeSiblings(item.children, id);
          if (subResult) result = subResult;
        }
      });
      return result;
    }

    // determine where to insert the node

    const newSiblings = findNodeSiblings(changedData, nodeAtDest?.id);
    if (!newSiblings) return;
    const insertIndex = newSiblings.findIndex((s) => s.id === nodeAtDest?.id);

    // remove the node from its old place
    const node = event.item.data;
    const siblings = findNodeSiblings(changedData, node.id);
    const siblingIndex = siblings?.findIndex((n) => n.id === node.id);
    const nodeToInsert: any = siblings?.splice(siblingIndex!, 1)[0];
    if (nodeAtDest.id === nodeToInsert.id) return;

    // insert node
    newSiblings.splice(insertIndex, 0, nodeToInsert);

    this.treeService.move(node_.id, nodeAtDest?.id).subscribe(() => {
      this.rebuildTreeForData(changedData);
    })
    // rebuild tree with mutated data
    // this.rebuildTreeForData(changedData);
  }

  rebuildTreeForData(data: any) {
    this.dataSource.data = data;
    this.expansionModel.selected.forEach((id) => {
      const node = this.treeControl.dataNodes.find((n) => n.id === id);
      node.sorting=true
      this.treeControl.expand(node);
    });

    // this.treeService.initialData().subscribe(res => {
    //   this.dataSource.data = res
    //   this.expansionModel.selected.forEach((id) => {
    //     const node = this.treeControl.dataNodes.find((n) => n.id === id);
    //     this.treeControl.expand(node);
    //   });
    // })


  }

}
