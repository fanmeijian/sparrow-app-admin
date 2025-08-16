import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService, CommonTreeService } from '@sparrowmini/common-api';
import { DynamicFlatNode, TREE_SERVICE, TreeDataSource, TreeService } from '@sparrowmini/common-ui-nm';
import { MenuClass } from '../menu.constant';

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
    const body = this.checklistSelection.selected
    this.commonTreeService.delete(MenuClass,body).subscribe();
  }
  checklistSelection = new SelectionModel<any>(
    true /* multiple */
  );

  constructor(
    private commonTreeService: CommonTreeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
}
