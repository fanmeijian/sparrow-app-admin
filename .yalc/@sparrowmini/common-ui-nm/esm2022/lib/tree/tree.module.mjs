import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SortableTreeComponent } from './sortable-tree/sortable-tree.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuComponent } from './menu/menu.component';
import * as i0 from "@angular/core";
export class TreeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb24tdWktbm0vc3JjL2xpYi90cmVlL3RyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQXFCdEQsTUFBTSxPQUFPLFVBQVU7K0dBQVYsVUFBVTtnSEFBVixVQUFVLGlCQWZuQixxQkFBcUI7WUFDckIsYUFBYSxhQUdiLFlBQVk7WUFDWixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZixjQUFjLGFBRU4scUJBQXFCLEVBQUUsYUFBYTtnSEFFbkMsVUFBVSxZQVhuQixZQUFZO1lBQ1osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixlQUFlO1lBQ2YsY0FBYzs7NEZBSUwsVUFBVTtrQkFqQnRCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjt3QkFDckIsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQztpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBNYXRUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU29ydGFibGVUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0YWJsZS10cmVlL3NvcnRhYmxlLXRyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNvcnRhYmxlVHJlZUNvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1NvcnRhYmxlVHJlZUNvbXBvbmVudCwgTWVudUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZU1vZHVsZSB7IH1cbiJdfQ==