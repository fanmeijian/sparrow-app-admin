import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from '@sparrowmini/common-api';
import { DynamicFlatNode, TREE_SERVICE, TreeDataSource, TreeService } from '@sparrowmini/common-ui-nm';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  onNodeClick($event: any) {
    this.router.navigate([$event.id],{relativeTo: this.route});
  }
  onTreeSelect($event: any[]) {
    console.log($event);
    this.checklistSelection.clear()
    if ($event.length > 0) {
      this.checklistSelection.select($event)
    }
  }
  new() {
    throw new Error('Method not implemented.');
  }
  delete() {
    throw new Error('Method not implemented.');
  }
  checklistSelection = new SelectionModel<any>(
    true /* multiple */
  );

  constructor(
    private commonApi: CommonApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
}
