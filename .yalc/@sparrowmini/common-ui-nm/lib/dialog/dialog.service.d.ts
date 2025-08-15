import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class DialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open<T>(component: any, data?: T): import("@angular/material/dialog").MatDialogRef<unknown, any>;
    confirm(message: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DialogService>;
}
