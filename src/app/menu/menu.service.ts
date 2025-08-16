import { Inject, Injectable } from '@angular/core';
import { BASE_PATH } from '../app.module';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash'
import { TreeService, DynamicFlatNode } from '@sparrowmini/common-ui-nm';
import { CommonTreeService } from '@sparrowmini/common-api';
import { MenuClass } from './menu.constant';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements TreeService {

  constructor(
    @Inject(BASE_PATH) public apiBase: string,
    private http: HttpClient,
    private commonTreeService: CommonTreeService,
  ) { }
  move(nodeId: any, nextNodeId: any): Observable<void> {
    return this.http.post<void>(`${this.apiBase}/menu/move`, [], { params: { currentId: nodeId, nextId: nextNodeId } });
  }
  getChildren(node: any): Observable<DynamicFlatNode[]> {
    // return this.http.get<any>(`${this.apiBase}/menu`, { params: { parentId: node.id } }).pipe(map(m => _.sortBy(m.content, 'seq')));
    return this.commonTreeService.children(MenuClass, {
      page: 0,
      size: 1000,
      sort: ['seq,asc']
    }, node.id).pipe(map((m: any)=>_.sortBy(m.content,'seq'))) as any
  }
  initialData(): Observable<DynamicFlatNode[]> {
    // return this.http.get<any>(`${this.apiBase}/menu`,{}).pipe(map(m=>_.sortBy(m.content,'seq')));
    return this.commonTreeService.children(MenuClass, {
      page: 0,
      size: 1000,
      sort: ['seq,asc']
    }, undefined).pipe(map((m: any)=>_.sortBy(m.content,'seq'))) as any
  }


}
