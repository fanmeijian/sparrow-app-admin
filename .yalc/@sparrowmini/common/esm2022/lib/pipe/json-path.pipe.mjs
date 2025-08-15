import { Pipe } from '@angular/core';
import { JSONPath } from 'jsonpath-plus';
import * as i0 from "@angular/core";
export class JsonPathPipe {
    /**
   * <!-- 返回第一个 -->
  {{ data | jsonPath:'$.store.book[*].price' }}
  
  <!-- 返回数组 -->
  {{ data | jsonPath:'$.store.book[*].price':true }}
   */
    transform(obj, path, multi = false) {
        try {
            const result = JSONPath({ path, json: obj });
            return multi ? result : (result?.length ? result[0] : null);
        }
        catch {
            return null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonPathPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: JsonPathPipe, name: "jsonPath" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonPathPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'jsonPath'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1wYXRoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb24vc3JjL2xpYi9waXBlL2pzb24tcGF0aC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXpDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCOzs7Ozs7S0FNQztJQUNELFNBQVMsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLFFBQWlCLEtBQUs7UUFDdEQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM3QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0Q7UUFBQyxNQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7K0dBZlUsWUFBWTs2R0FBWixZQUFZOzs0RkFBWixZQUFZO2tCQUh4QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpTT05QYXRoIH0gZnJvbSAnanNvbnBhdGgtcGx1cyc7XG5cblxuQFBpcGUoe1xuICBuYW1lOiAnanNvblBhdGgnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25QYXRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAqIDwhLS0g6L+U5Zue56ys5LiA5LiqIC0tPlxue3sgZGF0YSB8IGpzb25QYXRoOickLnN0b3JlLmJvb2tbKl0ucHJpY2UnIH19XG5cbjwhLS0g6L+U5Zue5pWw57uEIC0tPlxue3sgZGF0YSB8IGpzb25QYXRoOickLnN0b3JlLmJvb2tbKl0ucHJpY2UnOnRydWUgfX1cbiAqL1xuICB0cmFuc2Zvcm0ob2JqOiBhbnksIHBhdGg6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IEpTT05QYXRoKHsgcGF0aCwganNvbjogb2JqIH0pO1xuICAgICAgcmV0dXJuIG11bHRpID8gcmVzdWx0IDogKHJlc3VsdD8ubGVuZ3RoID8gcmVzdWx0WzBdIDogbnVsbCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==