import { FlatTreeControl } from '@angular/cdk/tree';
import { EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { DynamicFlatNode, TreeDataSource, TreeService } from './dynamic-data-source';
import { ChecklistSelectionService } from '../checklist-selection.service';
import * as i0 from "@angular/core";
/***
 * 可以进行排序的树，整体管理
 */
export declare class SortableTreeComponent {
    treeService: TreeService;
    multiple: boolean;
    initSelected: any[];
    onTreeSelect: EventEmitter<any[]>;
    checklistSelectionService: ChecklistSelectionService;
    onToggle(node: any): void;
    dataSource: TreeDataSource;
    selectedNode: any;
    constructor(treeService: TreeService);
    ngOnInit(): void;
    hasChild: (_: number, node: DynamicFlatNode) => boolean;
    treeControl: FlatTreeControl<any, any>;
    dragging: boolean;
    expandTimeout: any;
    expandDelay: number;
    validateDrop: boolean;
    expansionModel: SelectionModel<string>;
    drop(event: any): void;
    rebuildTreeForData(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortableTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortableTreeComponent, "spr-sortable-tree", never, { "multiple": { "alias": "multiple"; "required": false; }; "initSelected": { "alias": "initSelected"; "required": false; }; }, { "onTreeSelect": "onTreeSelect"; }, never, never, false, never>;
}
