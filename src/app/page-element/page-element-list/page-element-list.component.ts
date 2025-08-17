import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CommonApiComponent, CommonApiService } from '@sparrowmini/common-api';
import { environment } from 'src/environments/environment';
import { PageElementFormComponent } from '../page-element-form/page-element-form.component';
import { DialogService } from '@sparrowmini/common-ui-nm';
export const PageElementClass = 'cn.sparrowmini.common.model.PageElement'

@Component({
  selector: 'app-page-element-list',
  templateUrl: './page-element-list.component.html',
  styleUrls: ['./page-element-list.component.css']
})
export class PageElementListComponent implements OnInit {

  className = PageElementClass

  users: any[] = [];
  dataSource = new MatTableDataSource<any>();
  // pageable = { page: 0, size: 10 };

  total: number = 0;
  displayedColumns = ['id', 'name', 'code', 'pageId', 'users', 'sysroles', 'modified', 'actions'];

  filters: any[] = [];
  pageable = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
    sort: ['createdDate,desc'],
  };

  constructor(
    private commonApiService: CommonApiService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private http: HttpClient,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.onPage(this.pageable);
  }

  new() {
    this.dialog.open(PageElementFormComponent);
  }

  delete(sysrole: any) {
    this.dialogService.confirm('是否删除？').subscribe(r => {
      if (r) {
        this.commonApiService.delete(this.className, [sysrole.id]).subscribe(() => {
          this.ngOnInit();
          this.snack.open('删除成功！', '关闭');
        });
      }
    })

  }

  edit(sysrole: any) {
    this.dialog
      .open(PageElementFormComponent, { data: sysrole })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.ngOnInit();
      });
  }

  remove(sysroles: any[], users: any[]) {
    // this.scopeService
    //   .removePageElementPermission({
    //     sysrolePermissions: sysroles,
    //     userPermissions: users,
    //   })
    //   .subscribe(() => {
    //     this.snack.open('移除成功！', '关闭');
    //     this.ngOnInit();
    //   });
  }

  openPermission(sysrole: any) {
    // this.dialog
    //   .open(PageElementPermissionComponent, { data: sysrole})
    //   .afterClosed()
    //   .subscribe((res) => {
    //     if (res) {
    //       this.snack.open('授权成功！', '关闭');
    //       // this.onPage(this.pageable);
    //     }
    //   });
  }

  onPage(page: PageEvent) {
    this.dataSource = new MatTableDataSource<any>();
    // this.http.post(`${environment.apiBase}/page-elements/filter`, [])
    this.commonApiService.filter(PageElementClass, {
      page: 0,
      size: 10,
      sort: []
    }, undefined)
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.content);
        this.pageable.length = res.totalElements
      });
  }

  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  applyFilter(event: any) {
    this.filters = event;
    this.pageable.pageIndex = 0;
    this.paginator.pageIndex = this.pageable.pageIndex;
    this.onPage({
      pageIndex: this.pageable.pageIndex,
      pageSize: this.pageable.pageSize,
      length: this.pageable.length,
    });
  }
}
