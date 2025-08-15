import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class DialogService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb24tdWktbm0vc3JjL2xpYi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBR3BFLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDO0lBRTFDLElBQUksQ0FBSSxTQUFjLEVBQUUsSUFBUTtRQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQyxJQUFJO1lBQ0osS0FBSyxFQUFFLE9BQU87WUFDZCxZQUFZLEVBQUUsSUFBSTtZQUNsQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsaUJBQWlCO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzlDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRTtTQUNsQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQzsrR0FqQlUsYUFBYTttSEFBYixhQUFhOzs0RkFBYixhQUFhO2tCQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgb3BlbjxUPihjb21wb25lbnQ6IGFueSwgZGF0YT86IFQpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbihjb21wb25lbnQsIHtcbiAgICAgIGRhdGEsXG4gICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZSxcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBwYW5lbENsYXNzOiAnbXktZGlhbG9nLXBhbmVsJ1xuICAgIH0pO1xuICB9XG5cbiAgY29uZmlybShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3BlbihDb25maXJtRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7IG1lc3NhZ2UgfSxcbiAgICB9KS5hZnRlckNsb3NlZCgpO1xuICB9XG59XG4iXX0=