import { FlatTreeControl } from '@angular/cdk/tree';
import { EventEmitter, OnInit } from '@angular/core';
import { DynamicFlatNode, TreeDataSource, TreeService } from '../sortable-tree/dynamic-data-source';
import * as i0 from "@angular/core";
export declare class MenuComponent implements OnInit {
    treeService: TreeService;
    multiple: boolean;
    onTreeSelect: EventEmitter<DynamicFlatNode[]>;
    dataSource: TreeDataSource;
    selectedNode: any;
    constructor(treeService: TreeService);
    ngOnInit(): void;
    hasChild: (_: number, node: DynamicFlatNode) => boolean;
    treeControl: FlatTreeControl<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "spr-menu", never, { "multiple": { "alias": "multiple"; "required": false; }; }, { "onTreeSelect": "onTreeSelect"; }, never, never, false, never>;
}
