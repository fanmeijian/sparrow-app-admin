import { EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { DialogService } from "../dialog/dialog.service";
import * as i0 from "@angular/core";
export interface ViewConfig {
    name: string;
    field: string;
    id: any;
    link: string;
    type?: 'date' | 'number' | 'string';
    sort?: boolean;
    filter?: boolean;
}
export declare class EntityListComponent implements OnInit, OnChanges {
    private dialog;
    entityList: any[];
    total: number;
    viewConfig?: ViewConfig[];
    onPage: EventEmitter<PageEvent>;
    onDelete: EventEmitter<any[]>;
    pageable?: PageEvent;
    columns: any;
    displayedColumns: any;
    selection: any;
    delete(element: any): void;
    onPageChange($event: PageEvent): void;
    dataSource: any;
    new(): void;
    constructor(dialog: DialogService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityListComponent, "spr-entity-list", never, { "entityList": { "alias": "entityList"; "required": false; }; "total": { "alias": "total"; "required": false; }; "viewConfig": { "alias": "viewConfig"; "required": false; }; }, { "onPage": "onPage"; "onDelete": "onDelete"; }, never, never, false, never>;
}
