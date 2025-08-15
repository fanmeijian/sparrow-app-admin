import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
export class ConfirmDialogComponent {
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
  `, isInline: true, styles: ["mat-dialog-content{min-width:280px}mat-dialog-actions{margin-top:12px}\n"], dependencies: [{ kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uLXVpLW5tL3NyYy9saWIvZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLDBCQUEwQixDQUFDOzs7O0FBa0N6RSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQ1MsU0FBK0MsRUFDdEIsSUFBdUI7UUFEaEQsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFDckQsQ0FBQztJQUVMLGFBQWE7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7K0dBWlUsc0JBQXNCLDhDQUd2QixlQUFlO21HQUhkLHNCQUFzQix5REF2QnZCOzs7Ozs7Ozs7Ozs7O0dBYVQ7OzRGQVVVLHNCQUFzQjtrQkF6QmxDLFNBQVM7K0JBQ0UsbUJBQW1CLFlBQ25COzs7Ozs7Ozs7Ozs7O0dBYVQ7OzBCQWFFLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybURpYWxvZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgY2FuY2VsVGV4dD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMiBtYXQtZGlhbG9nLXRpdGxlPnt7IGRhdGEudGl0bGUgfHwgJ+ehruiupOaTjeS9nCcgfX08L2gyPlxuICAgIDxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgICA8cD57eyBkYXRhLm1lc3NhZ2UgfX08L3A+XG4gICAgPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPG1hdC1kaWFsb2ctYWN0aW9ucyBbYWxpZ25dPVwiJ2VuZCdcIj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25DYW5jZWxDbGljaygpXCI+XG4gICAgICAgIHt7IGRhdGEuY2FuY2VsVGV4dCB8fCAn5Y+W5raIJyB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkNvbmZpcm1DbGljaygpXCI+XG4gICAgICAgIHt7IGRhdGEuY29uZmlybVRleHQgfHwgJ+ehruiupCcgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgfVxuICAgIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtRGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IENvbmZpcm1EaWFsb2dEYXRhXG4gICkgeyB9XG5cbiAgb25DYW5jZWxDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBvbkNvbmZpcm1DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgfVxufVxuIl19