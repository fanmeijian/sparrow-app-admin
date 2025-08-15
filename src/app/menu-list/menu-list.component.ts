import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { DynamicFlatNode, DynamicDataSource, TREE_SERVICE, TreeService } from '../sortable-tree/dynamic-data-source';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit{
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
}
