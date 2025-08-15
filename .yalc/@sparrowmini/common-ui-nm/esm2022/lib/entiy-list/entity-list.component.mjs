import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import * as i0 from "@angular/core";
import * as i1 from "../dialog/dialog.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/material/table";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@sparrowmini/common";
export class EntityListComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EntityListComponent, deps: [{ token: i1.DialogService }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: function () { return [{ type: i1.DialogService }]; }, propDecorators: { entityList: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uLXVpLW5tL3NyYy9saWIvZW50aXktbGlzdC9lbnRpdHktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7OztBQWlGMUQsTUFBTSxPQUFPLG1CQUFtQjtJQWM5QixNQUFNLENBQUMsT0FBWTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBaUI7UUFDNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtTQUMxQjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFHRCxHQUFHO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZ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bEIsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlRXZlbnQsIE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xuaW1wb3J0IHsgSnNvblBhdGhQaXBlIH0gZnJvbSBcIkBzcGFycm93bWluaS9jb21tb25cIlxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi9kaWFsb2cvZGlhbG9nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xuZXhwb3J0IGludGVyZmFjZSBWaWV3Q29uZmlnIHtcbiAgbmFtZTogc3RyaW5nLFxuICBmaWVsZDogc3RyaW5nLFxuICBpZDogYW55LFxuICBsaW5rOiBzdHJpbmcsXG4gIHR5cGU/OiAnZGF0ZScgfCAnbnVtYmVyJyB8ICdzdHJpbmcnLFxuICBzb3J0PzogYm9vbGVhbixcbiAgZmlsdGVyPzogYm9vbGVhbixcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ByLWVudGl0eS1saXN0JyxcbiAgc3R5bGVzOiBbYFxuICAgIHRoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXQtc2lkZW5hdi1jb250ZW50LWJhY2tncm91bmQtY29sb3IpICFpbXBvcnRhbnQ7XG59XG4udGFibGUtY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpXG5cbn1cbiAgICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJzLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAoY2xpY2spPVwibmV3KClcIiBjb2xvcj1cInByaW1hcnlcIj7mt7vliqDnlKjmiLc8L2J1dHRvbj5cbjwvZGl2PiAtLT5cblxuPHNlY3Rpb24gY2xhc3M9XCJ0YWJsZS1jb250YWluZXJcIj5cbiAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInNlbGVjdFwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBzdHlsZT1cIndpZHRoOiAzMHB4O1wiPlxuICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiJGV2ZW50ID8gdG9nZ2xlQWxsUm93cygpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxuICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgIWlzQWxsU2VsZWN0ZWQoKVwiPlxuICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KVwiPlxuICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIiNcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc3R5bGU9XCJ3aWR0aDogMzBweDtcIj4gIyA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGk9aW5kZXhcIj4ge3socGFnZWFibGU/LnBhZ2VJbmRleCEgKiBwYWdlYWJsZT8ucGFnZVNpemUhKSsgaSArIDF9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cIml0ZW0uZmllbGRcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb2x1bW5zXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2l0ZW0ubmFtZX19IDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0ubGlua1wiIFtyb3V0ZXJMaW5rXT1cIltpdGVtLmxpbmtdXCIgW3F1ZXJ5UGFyYW1zXT1cIntpZDogZWxlbWVudFtpdGVtLmlkXX1cIiByb3V0ZXJMaW5rQWN0aXZlPVwicm91dGVyLWxpbmstYWN0aXZlXCIgPnt7ZWxlbWVudHxqc29uUGF0aDogaXRlbS5maWVsZH19PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFpdGVtLmxpbmtcIj57e2VsZW1lbnR8anNvblBhdGg6IGl0ZW0uZmllbGR9fTwvc3Bhbj5cbiAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGlvblwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBzdHlsZT1cIndpZHRoOiA2MHB4O1wiPiAgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIChjbGljayk9XCJkZWxldGUoZWxlbWVudClcIj7liKDpmaQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICA8L3RhYmxlPlxuPC9zZWN0aW9uPlxuXG5cbjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwidG90YWxcIiBbcGFnZVNpemVdPVwicGFnZWFibGU/LnBhZ2VTaXplXCIgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDI1LCAxMDBdXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCJcbiAgKHBhZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIj5cbjwvbWF0LXBhZ2luYXRvcj5cblxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGVudGl0eUxpc3Q6IGFueVtdID0gW11cbiAgQElucHV0KCkgdG90YWw6IG51bWJlciA9IDBcbiAgQElucHV0KCkgdmlld0NvbmZpZz86IFZpZXdDb25maWdbXVxuXG4gIEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBPdXRwdXQoKSBvbkRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIHBhZ2VhYmxlPzogUGFnZUV2ZW50XG4gIGNvbHVtbnM6IGFueTtcbiAgZGlzcGxheWVkQ29sdW1uczogYW55O1xuXG4gIHNlbGVjdGlvbjogYW55O1xuICBkZWxldGUoZWxlbWVudDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICB0aGlzLmRpYWxvZy5jb25maXJtKCfnoa7orqTliKDpmaTlkJfvvJ8nKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZS5uZXh0KFtlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgb25QYWdlQ2hhbmdlKCRldmVudDogUGFnZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXVxuICAgIH1cblxuICAgIHRoaXMucGFnZWFibGUgPSAkZXZlbnRcbiAgICB0aGlzLm9uUGFnZS5uZXh0KCRldmVudClcbiAgfVxuXG4gIGRhdGFTb3VyY2U6IGFueTtcbiAgbmV3KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBEaWFsb2dTZXJ2aWNlXG4gICkgeyB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0OiBhbnlbXSA9IGNoYW5nZXNbJ2VudGl0eUxpc3QnXS5jdXJyZW50VmFsdWVcblxuICAgIGlmIChsaXN0ICYmIGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShsaXN0KVxuICAgICAgaWYgKHRoaXMudmlld0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLnZpZXdDb25maWdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IE9iamVjdC5rZXlzKGxpc3RbMF0pLm1hcChtID0+IHsgcmV0dXJuIHsgbmFtZTogbSwgZmllbGQ6IG0gfSB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBbJ3NlbGVjdCcsICcjJ10uY29uY2F0KCh0aGlzLnZpZXdDb25maWcgfHwgW10pLm1hcChtID0+IG0uZmllbGQpKS5jb25jYXQoWydhY3Rpb24nXSlcbiAgICB9XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGlvbjogYW55W10gfCB1bmRlZmluZWQgPSBbXTtcbiAgICBjb25zdCBhbGxvd011bHRpU2VsZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KGFsbG93TXVsdGlTZWxlY3QsIGluaXRpYWxTZWxlY3Rpb24pO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlKHsgcGFnZUluZGV4OiAwLCBwYWdlU2l6ZTogMTAsIGxlbmd0aDogMCB9KVxuICB9XG5cblxuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PSBudW1Sb3dzO1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgdG9nZ2xlQWxsUm93cygpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cbn1cbiJdfQ==