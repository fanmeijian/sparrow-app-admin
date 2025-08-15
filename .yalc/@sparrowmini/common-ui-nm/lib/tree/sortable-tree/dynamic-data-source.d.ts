import { DataSource, CollectionViewer, SelectionChange } from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import { InjectionToken } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
export declare const TREE_SERVICE: InjectionToken<TreeService>;
export interface TreeService {
    /**
     * { parentId: string, appId: string, sort: string[] }
     * @param params
     */
    getChildren(params: any): Observable<DynamicFlatNode[]>;
    initialData(): Observable<DynamicFlatNode[]>;
    move(nodeId: any, nextNodeId: any): Observable<void>;
}
export interface DynamicFlatNode {
    id: string;
    parentId: string;
    name?: string;
    code?: string;
    level: number;
    expandable: boolean;
    childCount: number;
    isLoading: boolean;
}
export interface DynamicTreeNode {
    id: string;
    me: any;
    name?: string;
    code?: string;
    level: number;
    expandable: boolean;
    childCount: number;
    isLoading: boolean;
    children: DynamicTreeNode[];
}
export declare class TreeDataSource implements DataSource<DynamicFlatNode> {
    private _treeControl;
    private treeService;
    dataChange: BehaviorSubject<DynamicFlatNode[]>;
    /** 节点缓存：key 为父节点 item，value 为其展开后的子节点列表 */
    nodeCache: Map<any, DynamicFlatNode[]>;
    get data(): DynamicFlatNode[];
    set data(value: DynamicFlatNode[]);
    constructor(_treeControl: FlatTreeControl<DynamicFlatNode>, treeService: TreeService);
    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]>;
    disconnect(collectionViewer: CollectionViewer): void;
    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>): void;
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node: DynamicFlatNode, expand: boolean): void;
    hasCache(node: any): number;
    getCache(node: any): DynamicFlatNode[] | undefined;
}
