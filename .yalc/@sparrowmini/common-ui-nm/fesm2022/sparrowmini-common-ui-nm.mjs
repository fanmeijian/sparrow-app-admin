import * as i0 from '@angular/core';
import { Component, Inject, Injectable, EventEmitter, Input, Output, NgModule, InjectionToken } from '@angular/core';
import * as i5 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i6 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i4 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i7 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i8 from '@sparrowmini/common';
import { CommonPipeModule } from '@sparrowmini/common';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge, map } from 'rxjs';
import * as i3$1 from '@angular/material/tree';
import { MatTreeModule } from '@angular/material/tree';
import * as i4$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5$1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i7$1 from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCancelClick() {
        this.dialogRef.close(false);
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfirmDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ConfirmDialogComponent, selector: "my-confirm-dialog", ngImport: i0, template: `
    <h2 mat-dialog-title>{{ data.title || '确认操作' }}</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions [align]="'end'">
      <button mat-button (click)="onCancelClick()">
        {{ data.cancelText || '取消' }}
      </button>
      <button mat-raised-button color="primary" (click)="onConfirmClick()">
        {{ data.confirmText || '确认' }}
      </button>
    </mat-dialog-actions>
  `, isInline: true, styles: ["mat-dialog-content{min-width:280px}mat-dialog-actions{margin-top:12px}\n"], dependencies: [{ kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfirmDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'my-confirm-dialog', template: `
    <h2 mat-dialog-title>{{ data.title || '确认操作' }}</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions [align]="'end'">
      <button mat-button (click)="onCancelClick()">
        {{ data.cancelText || '取消' }}
      </button>
      <button mat-raised-button color="primary" (click)="onConfirmClick()">
        {{ data.confirmText || '确认' }}
      </button>
    </mat-dialog-actions>
  `, styles: ["mat-dialog-content{min-width:280px}mat-dialog-actions{margin-top:12px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(component, data) {
        return this.dialog.open(component, {
            data,
            width: '500px',
            disableClose: true,
            autoFocus: false,
            panelClass: 'my-dialog-panel'
        });
    }
    confirm(message) {
        return this.dialog.open(ConfirmDialogComponent, {
            data: { message },
        }).afterClosed();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });

class EntityListComponent {
    delete(element) {
        console.log(element);
        this.dialog.confirm('确认删除吗？').subscribe(result => {
            if (result) {
                this.onDelete.next([element]);
            }
        });
    }
    onPageChange($event) {
        if (this.dataSource) {
            this.dataSource.data = [];
        }
        this.pageable = $event;
        this.onPage.next($event);
    }
    new() {
        throw new Error('Method not implemented.');
    }
    constructor(dialog) {
        this.dialog = dialog;
        this.entityList = [];
        this.total = 0;
        this.onPage = new EventEmitter();
        this.onDelete = new EventEmitter();
    }
    ngOnChanges(changes) {
        const list = changes['entityList'].currentValue;
        if (list && list.length > 0) {
            this.dataSource = new MatTableDataSource(list);
            if (this.viewConfig) {
                this.columns = this.viewConfig;
            }
            else {
                this.columns = Object.keys(list[0]).map(m => { return { name: m, field: m }; });
            }
            this.displayedColumns = ['select', '#'].concat((this.viewConfig || []).map(m => m.field)).concat(['action']);
        }
    }
    ngOnInit() {
        const initialSelection = [];
        const allowMultiSelect = true;
        this.selection = new SelectionModel(allowMultiSelect, initialSelection);
        this.onPageChange({ pageIndex: 0, pageSize: 10, length: 0 });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected == numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((row) => this.selection.select(row));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EntityListComponent, deps: [{ token: DialogService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: EntityListComponent, selector: "spr-entity-list", inputs: { entityList: "entityList", total: "total", viewConfig: "viewConfig" }, outputs: { onPage: "onPage", onDelete: "onDelete" }, usesOnChanges: true, ngImport: i0, template: `
    <!-- <div class="s-row">
  <button mat-flat-button (click)="new()" color="primary">添加用户</button>
</div> -->

<section class="table-container">
  <table mat-table [dataSource]="dataSource">

    <ng-container matColumnDef="select">
      <th mat-header-cell *matHeaderCellDef style="width: 30px;">
        <mat-checkbox (change)="$event ? toggleAllRows() : null"
                  [checked]="selection.hasValue() && isAllSelected()"
                  [indeterminate]="selection.hasValue() && !isAllSelected()">
    </mat-checkbox>
    </th>
      <td mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
                  (change)="$event ? selection.toggle(row) : null"
                  [checked]="selection.isSelected(row)">
    </mat-checkbox>
    </td>
    </ng-container>

    <ng-container matColumnDef="#">
      <th mat-header-cell *matHeaderCellDef style="width: 30px;"> # </th>
      <td mat-cell *matCellDef="let i=index"> {{(pageable?.pageIndex! * pageable?.pageSize!)+ i + 1}} </td>
    </ng-container>

    <ng-container [matColumnDef]="item.field" *ngFor="let item of columns">
      <th mat-header-cell *matHeaderCellDef> {{item.name}} </th>
      <td mat-cell *matCellDef="let element">
        <span *ngIf="item.link" [routerLink]="[item.link]" [queryParams]="{id: element[item.id]}" routerLinkActive="router-link-active" >{{element|jsonPath: item.field}}</span>
        <span *ngIf="!item.link">{{element|jsonPath: item.field}}</span>
    </td>
    </ng-container>


    <ng-container matColumnDef="action">
      <th mat-header-cell *matHeaderCellDef style="width: 60px;">  </th>
      <td mat-cell *matCellDef="let element">
        <div class="s-row">
          <button mat-button color="accent" (click)="delete(element)">删除</button>
        </div>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</section>


<mat-paginator [length]="total" [pageSize]="pageable?.pageSize" [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page"
  (page)="onPageChange($event)">
</mat-paginator>

  `, isInline: true, styles: ["th{background-color:var(--mat-sidenav-content-background-color)!important}.table-container{width:100%;height:calc(100vh - 200px)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i4.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: i5.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i5.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i5.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i7.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: i8.JsonPathPipe, name: "jsonPath" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EntityListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'spr-entity-list', template: `
    <!-- <div class="s-row">
  <button mat-flat-button (click)="new()" color="primary">添加用户</button>
</div> -->

<section class="table-container">
  <table mat-table [dataSource]="dataSource">

    <ng-container matColumnDef="select">
      <th mat-header-cell *matHeaderCellDef style="width: 30px;">
        <mat-checkbox (change)="$event ? toggleAllRows() : null"
                  [checked]="selection.hasValue() && isAllSelected()"
                  [indeterminate]="selection.hasValue() && !isAllSelected()">
    </mat-checkbox>
    </th>
      <td mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
                  (change)="$event ? selection.toggle(row) : null"
                  [checked]="selection.isSelected(row)">
    </mat-checkbox>
    </td>
    </ng-container>

    <ng-container matColumnDef="#">
      <th mat-header-cell *matHeaderCellDef style="width: 30px;"> # </th>
      <td mat-cell *matCellDef="let i=index"> {{(pageable?.pageIndex! * pageable?.pageSize!)+ i + 1}} </td>
    </ng-container>

    <ng-container [matColumnDef]="item.field" *ngFor="let item of columns">
      <th mat-header-cell *matHeaderCellDef> {{item.name}} </th>
      <td mat-cell *matCellDef="let element">
        <span *ngIf="item.link" [routerLink]="[item.link]" [queryParams]="{id: element[item.id]}" routerLinkActive="router-link-active" >{{element|jsonPath: item.field}}</span>
        <span *ngIf="!item.link">{{element|jsonPath: item.field}}</span>
    </td>
    </ng-container>


    <ng-container matColumnDef="action">
      <th mat-header-cell *matHeaderCellDef style="width: 60px;">  </th>
      <td mat-cell *matCellDef="let element">
        <div class="s-row">
          <button mat-button color="accent" (click)="delete(element)">删除</button>
        </div>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</section>


<mat-paginator [length]="total" [pageSize]="pageable?.pageSize" [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page"
  (page)="onPageChange($event)">
</mat-paginator>

  `, styles: ["th{background-color:var(--mat-sidenav-content-background-color)!important}.table-container{width:100%;height:calc(100vh - 200px)}\n"] }]
        }], ctorParameters: function () { return [{ type: DialogService }]; }, propDecorators: { entityList: [{
                type: Input
            }], total: [{
                type: Input
            }], viewConfig: [{
                type: Input
            }], onPage: [{
                type: Output
            }], onDelete: [{
                type: Output
            }] } });

class DialogModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, declarations: [ConfirmDialogComponent], imports: [CommonModule,
            MatDialogModule,
            MatButtonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, providers: [DialogService], imports: [CommonModule,
            MatDialogModule,
            MatButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ConfirmDialogComponent],
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatButtonModule,
                    ],
                    providers: [DialogService]
                }]
        }] });

class EntiyListModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EntiyListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: EntiyListModule, declarations: [EntityListComponent], imports: [CommonModule,
            RouterModule,
            MatPaginatorModule,
            MatTableModule,
            MatButtonModule,
            CommonPipeModule,
            DialogModule,
            MatCheckboxModule], exports: [EntityListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EntiyListModule, imports: [CommonModule,
            RouterModule,
            MatPaginatorModule,
            MatTableModule,
            MatButtonModule,
            CommonPipeModule,
            DialogModule,
            MatCheckboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EntiyListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EntityListComponent],
                    imports: [
                        CommonModule,
                        RouterModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatButtonModule,
                        CommonPipeModule,
                        DialogModule,
                        MatCheckboxModule
                    ],
                    exports: [EntityListComponent]
                }]
        }] });

const TREE_SERVICE = new InjectionToken('treeService');
class TreeDataSource {
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    constructor(_treeControl, 
    // private _database: DynamicDatabase,
    treeService) {
        this._treeControl = _treeControl;
        this.treeService = treeService;
        this.dataChange = new BehaviorSubject([]);
        /** 节点缓存：key 为父节点 item，value 为其展开后的子节点列表 */
        this.nodeCache = new Map();
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
    disconnect(collectionViewer) { }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        console.log(change);
        if (change.added) {
            change.added.forEach((node) => {
                if (node.sorting) {
                    node.sorting = false;
                }
                else {
                    this.toggleNode(node, true);
                }
            });
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const index = this.data.indexOf(node);
        if (expand) {
            console.log(this.nodeCache);
            let children;
            node.isLoading = true;
            const $childrenRequest = this.treeService.getChildren(node);
            $childrenRequest.subscribe((childrenNames) => {
                children = childrenNames;
                if (!children || index < 0)
                    return;
                children.forEach(f => f.level = node.level + 1);
                this.data.splice(index + 1, 0, ...children);
                this.dataChange.next(this.data);
                node.isLoading = false;
                this.nodeCache.set(node.id, children);
            });
        }
        else {
            // 记录要移除的子节点数量
            let count = 0;
            for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
            this.data.splice(index + 1, count);
            this.dataChange.next(this.data);
        }
    }
}

class MenuComponent {
    constructor(treeService) {
        this.treeService = treeService;
        this.multiple = true;
        this.onTreeSelect = new EventEmitter();
        this.hasChild = (_, node) => node.expandable;
        this.treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
    }
    ngOnInit() {
        this.dataSource = new TreeDataSource(this.treeControl, this.treeService);
        this.treeService.initialData().subscribe(res => {
            this.dataSource.data = res;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MenuComponent, deps: [{ token: TREE_SERVICE }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MenuComponent, selector: "spr-menu", inputs: { multiple: "multiple" }, outputs: { onTreeSelect: "onTreeSelect" }, ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n      <button mat-icon-button disabled></button>\n      <span [class]=\"\n          selectedNode === node.url\n            ? 'norml-tree-node selected-norml-tree-node'\n            : 'norml-tree-node'\n        \" [routerLink]=\"node.url\" (click)=\"selectedNode = node.url\">{{ node.name }}</span>\n    </mat-tree-node>\n\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n      <button type=\"button\" mat-icon-button matTreeNodeToggle [disabled]=\"node.isLoading\">\n        <mat-icon>\n          {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n        </mat-icon>\n      </button>\n      <span class=\"s-link\">{{ node.name }}({{node.childCount}})</span>\n\n      <mat-spinner *ngIf=\"node.isLoading\" [diameter]=\"18\"></mat-spinner>\n            <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\" role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </div>\n    </mat-tree-node>\n  </mat-tree>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3$1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i3$1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i3$1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i3$1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i3$1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "directive", type: i3$1.MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: i6.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'spr-menu', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n      <button mat-icon-button disabled></button>\n      <span [class]=\"\n          selectedNode === node.url\n            ? 'norml-tree-node selected-norml-tree-node'\n            : 'norml-tree-node'\n        \" [routerLink]=\"node.url\" (click)=\"selectedNode = node.url\">{{ node.name }}</span>\n    </mat-tree-node>\n\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n      <button type=\"button\" mat-icon-button matTreeNodeToggle [disabled]=\"node.isLoading\">\n        <mat-icon>\n          {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n        </mat-icon>\n      </button>\n      <span class=\"s-link\">{{ node.name }}({{node.childCount}})</span>\n\n      <mat-spinner *ngIf=\"node.isLoading\" [diameter]=\"18\"></mat-spinner>\n            <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\" role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </div>\n    </mat-tree-node>\n  </mat-tree>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [TREE_SERVICE]
                }] }]; }, propDecorators: { multiple: [{
                type: Input
            }], onTreeSelect: [{
                type: Output
            }] } });

/***
 * 可以进行排序的树，整体管理
 */
class SortableTreeComponent {
    constructor(treeService) {
        this.treeService = treeService;
        this.multiple = true;
        this.onTreeSelect = new EventEmitter();
        this.hasChild = (_, node) => node.expandable;
        this.treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
        this.dragging = false;
        this.expandDelay = 1000;
        this.validateDrop = false;
        this.expansionModel = new SelectionModel(true);
    }
    ngOnInit() {
        console.log(this.treeService);
        this.dataSource = new TreeDataSource(this.treeControl, this.treeService);
        this.treeService.initialData().subscribe(res => {
            this.dataSource.data = res;
        });
    }
    drop(event) {
        console.log('origin/destination', event.previousIndex, event.currentIndex, event);
        // ignore drops outside of the tree
        if (!event.isPointerOverContainer)
            return;
        // deep clone the data source so we can mutate it
        const changedData = JSON.parse(JSON.stringify(this.dataSource.data));
        const node_ = changedData[event.previousIndex];
        const nodeAtDest = this.dataSource.data[event.currentIndex];
        if (node_.parentId !== nodeAtDest.parentId) {
            alert('仅允许同一层级排序');
            return;
        }
        // recursive find function to find siblings of node
        function findNodeSiblings(arr, id) {
            let result, subResult;
            arr.forEach((item, i) => {
                if (item.id === id) {
                    result = arr;
                }
                else if (item.children) {
                    subResult = findNodeSiblings(item.children, id);
                    if (subResult)
                        result = subResult;
                }
            });
            return result;
        }
        // determine where to insert the node
        const newSiblings = findNodeSiblings(changedData, nodeAtDest?.id);
        if (!newSiblings)
            return;
        const insertIndex = newSiblings.findIndex((s) => s.id === nodeAtDest?.id);
        // remove the node from its old place
        const node = event.item.data;
        const siblings = findNodeSiblings(changedData, node.id);
        const siblingIndex = siblings?.findIndex((n) => n.id === node.id);
        const nodeToInsert = siblings?.splice(siblingIndex, 1)[0];
        if (nodeAtDest.id === nodeToInsert.id)
            return;
        // insert node
        newSiblings.splice(insertIndex, 0, nodeToInsert);
        this.treeService.move(node_.id, nodeAtDest?.id).subscribe(() => {
            this.rebuildTreeForData(changedData);
        });
        // rebuild tree with mutated data
        // this.rebuildTreeForData(changedData);
    }
    rebuildTreeForData(data) {
        this.dataSource.data = data;
        this.expansionModel.selected.forEach((id) => {
            const node = this.treeControl.dataNodes.find((n) => n.id === id);
            node.sorting = true;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortableTreeComponent, deps: [{ token: TREE_SERVICE }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SortableTreeComponent, selector: "spr-sortable-tree", inputs: { multiple: "multiple" }, outputs: { onTreeSelect: "onTreeSelect" }, ngImport: i0, template: "<mat-tree\n  [dataSource]=\"dataSource\"\n  [treeControl]=\"treeControl\"\n  [cdkDropListData]=\"dataSource.data\"\n  cdkDropList\n  (cdkDropListDropped)=\"drop($event)\"\n>\n  <mat-tree-node\n    *matTreeNodeDef=\"let node\"\n    matTreeNodePadding\n    [cdkDragData]=\"node\"\n    cdkDragLockAxis=\"y\"\n    cdkDrag\n  >\n    <button mat-icon-button disabled></button>\n    <span\n      [class]=\"\n        selectedNode === node.url\n          ? 'norml-tree-node selected-norml-tree-node'\n          : 'norml-tree-node'\n      \"\n      [routerLink]=\"node.url\"\n      (click)=\"selectedNode = node.url\"\n      >{{ node.name }}</span\n    >\n    <button mat-icon-button cdkDragLockAxis=\"y\" cdkDragHandle>\n      <mat-icon>drag_indicator</mat-icon>\n    </button>\n  </mat-tree-node>\n\n  <mat-tree-node\n    *matTreeNodeDef=\"let node; when: hasChild\"\n    matTreeNodePadding\n    [cdkDragData]=\"node\"\n    cdkDragLockAxis=\"y\"\n    cdkDrag\n  >\n    <button\n      type=\"button\"\n      mat-icon-button\n      matTreeNodeToggle\n      [disabled]=\"node.isLoading\"\n      (click)=\"expansionModel.toggle(node.id)\"\n    >\n      <mat-icon>\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\n      </mat-icon>\n    </button>\n    <span class=\"s-link\">{{ node.name }}</span>\n    <button mat-icon-button cdkDragLockAxis=\"y\" cdkDragHandle>\n      <mat-icon>drag_indicator</mat-icon>\n    </button>\n    <mat-spinner *ngIf=\"node.isLoading\" [diameter]=\"18\"></mat-spinner>\n    <div\n      [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n      role=\"group\"\n    >\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-tree-node>\n</mat-tree>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3$1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i3$1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i3$1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i3$1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i3$1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "directive", type: i3$1.MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: i6.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i7$1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i7$1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i7$1.CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortableTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'spr-sortable-tree', template: "<mat-tree\n  [dataSource]=\"dataSource\"\n  [treeControl]=\"treeControl\"\n  [cdkDropListData]=\"dataSource.data\"\n  cdkDropList\n  (cdkDropListDropped)=\"drop($event)\"\n>\n  <mat-tree-node\n    *matTreeNodeDef=\"let node\"\n    matTreeNodePadding\n    [cdkDragData]=\"node\"\n    cdkDragLockAxis=\"y\"\n    cdkDrag\n  >\n    <button mat-icon-button disabled></button>\n    <span\n      [class]=\"\n        selectedNode === node.url\n          ? 'norml-tree-node selected-norml-tree-node'\n          : 'norml-tree-node'\n      \"\n      [routerLink]=\"node.url\"\n      (click)=\"selectedNode = node.url\"\n      >{{ node.name }}</span\n    >\n    <button mat-icon-button cdkDragLockAxis=\"y\" cdkDragHandle>\n      <mat-icon>drag_indicator</mat-icon>\n    </button>\n  </mat-tree-node>\n\n  <mat-tree-node\n    *matTreeNodeDef=\"let node; when: hasChild\"\n    matTreeNodePadding\n    [cdkDragData]=\"node\"\n    cdkDragLockAxis=\"y\"\n    cdkDrag\n  >\n    <button\n      type=\"button\"\n      mat-icon-button\n      matTreeNodeToggle\n      [disabled]=\"node.isLoading\"\n      (click)=\"expansionModel.toggle(node.id)\"\n    >\n      <mat-icon>\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\n      </mat-icon>\n    </button>\n    <span class=\"s-link\">{{ node.name }}</span>\n    <button mat-icon-button cdkDragLockAxis=\"y\" cdkDragHandle>\n      <mat-icon>drag_indicator</mat-icon>\n    </button>\n    <mat-spinner *ngIf=\"node.isLoading\" [diameter]=\"18\"></mat-spinner>\n    <div\n      [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n      role=\"group\"\n    >\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [TREE_SERVICE]
                }] }]; }, propDecorators: { multiple: [{
                type: Input
            }], onTreeSelect: [{
                type: Output
            }] } });

class TreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TreeModule, declarations: [SortableTreeComponent,
            MenuComponent], imports: [CommonModule,
            RouterModule,
            MatCheckboxModule,
            MatTreeModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatButtonModule,
            DragDropModule], exports: [SortableTreeComponent, MenuComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TreeModule, imports: [CommonModule,
            RouterModule,
            MatCheckboxModule,
            MatTreeModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatButtonModule,
            DragDropModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SortableTreeComponent,
                        MenuComponent,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        MatCheckboxModule,
                        MatTreeModule,
                        MatIconModule,
                        MatProgressSpinnerModule,
                        MatButtonModule,
                        DragDropModule,
                    ],
                    exports: [SortableTreeComponent, MenuComponent]
                }]
        }] });

/*
 * Public API Surface of common-ui-nm
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ConfirmDialogComponent, DialogModule, DialogService, EntityListComponent, EntiyListModule, MenuComponent, SortableTreeComponent, TREE_SERVICE, TreeDataSource, TreeModule };
//# sourceMappingURL=sparrowmini-common-ui-nm.mjs.map
