import { Inject, Injectable } from '@angular/core';
import { BASE_PATH } from '../app.module';
import { DynamicFlatNode, TreeService } from '../sortable-tree/dynamic-data-source';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class MenuService implements TreeService {

  constructor(
    @Inject(BASE_PATH) public apiBase: string,
    private http: HttpClient,
  ) { }
  move(nodeId: any, nextNodeId: any): Observable<void> {
    return this.http.post<void>(`${this.apiBase}/menu/move`,[],{params: {currentId: nodeId, nextId: nextNodeId}});
  }
  getChildren(node: any): Observable<DynamicFlatNode[]> {
    return this.http.get<any>(`${this.apiBase}/menu`,{params: {parentId: node.id}}).pipe(map(m=>_.sortBy(m.content,'seq')));
  }
  initialData(): Observable<DynamicFlatNode[]> {
    return this.http.get<any>(`${this.apiBase}/menu`,{}).pipe(map(m=>_.sortBy(m.content,'seq')));
  }


}
