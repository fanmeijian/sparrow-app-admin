import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';
import { JSONPath } from 'jsonpath-plus';

class JsonPathPipe {
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

class CommonPipeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CommonPipeModule, declarations: [JsonPathPipe], exports: [JsonPathPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonPipeModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        JsonPathPipe
                    ],
                    imports: [],
                    exports: [
                        JsonPathPipe
                    ]
                }]
        }] });

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonPipeModule, JsonPathPipe };
//# sourceMappingURL=sparrowmini-common.mjs.map
