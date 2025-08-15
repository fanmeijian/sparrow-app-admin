import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class JsonPathPipe implements PipeTransform {
    /**
   * <!-- 返回第一个 -->
  {{ data | jsonPath:'$.store.book[*].price' }}
  
  <!-- 返回数组 -->
  {{ data | jsonPath:'$.store.book[*].price':true }}
   */
    transform(obj: any, path: string, multi?: boolean): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonPathPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<JsonPathPipe, "jsonPath", false>;
}
