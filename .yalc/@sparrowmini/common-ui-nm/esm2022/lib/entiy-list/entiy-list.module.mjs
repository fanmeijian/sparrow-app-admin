import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EntityListComponent } from './entity-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonPipeModule } from '@sparrowmini/common';
import { DialogModule } from '../dialog/dialog.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
export class EntiyListModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXktbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb24tdWktbm0vc3JjL2xpYi9lbnRpeS1saXN0L2VudGl5LWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFpQi9DLE1BQU0sT0FBTyxlQUFlOytHQUFmLGVBQWU7Z0hBQWYsZUFBZSxpQkFiWCxtQkFBbUIsYUFFaEMsWUFBWTtZQUNaLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGlCQUFpQixhQUVULG1CQUFtQjtnSEFFbEIsZUFBZSxZQVh4QixZQUFZO1lBQ1osWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osaUJBQWlCOzs0RkFJUixlQUFlO2tCQWQzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgRW50aXR5TGlzdENvbXBvbmVudCB9IGZyb20gJy4vZW50aXR5LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBDb21tb25QaXBlTW9kdWxlIH0gZnJvbSAnQHNwYXJyb3dtaW5pL2NvbW1vbic7XG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi9kaWFsb2cvZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VudGl0eUxpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vblBpcGVNb2R1bGUsXG4gICAgRGlhbG9nTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtFbnRpdHlMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFbnRpeUxpc3RNb2R1bGUgeyB9XG4iXX0=