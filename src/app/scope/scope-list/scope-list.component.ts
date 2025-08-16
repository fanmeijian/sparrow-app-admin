import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ScopeFormComponent } from '../scope-form/scope-form.component';
import { ScopePermissionComponent } from '../scope-permission/scope-permission.component';
import { CommonApiService } from '@sparrowmini/common-api';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export const ScopeClass= 'cn.sparrowmini.common.model.Scope'

@Component({
  selector: 'app-scope-list',
  templateUrl: './scope-list.component.html',
  styleUrls: ['./scope-list.component.css']
})
export class ScopeListComponent implements OnInit {
  sync() {
    const $request = this.http.post(`${environment.apiBase}/permissions/scopes/synchronize`,[])
    $request.subscribe(() => {
      this.snack.open('同步成功！', '关闭');
      this.ngOnInit();
    })
  }
  users: any[] = [];
  dataSource = new MatTableDataSource<any>();
  // pageable = { page: 0, size: 10 };

  total: number = 0;
  displayedColumns = ['id', 'name', 'code', 'users', 'sysroles','modified', 'actions'];

  filters: any[] = [];
  pageable = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
    sort: ['createdDate,desc'],
  };

  constructor(
    private scopeService: CommonApiService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.onPage(this.pageable);
  }

  new() {
    this.dialog.open(ScopeFormComponent);
  }

  delete(sysrole: any) {
    // this.scopeService.deleteScopes([sysrole.id]).subscribe(() => {
    //   this.ngOnInit();
    //   this.snack.open('删除成功！', '关闭');
    // });

  }

  edit(sysrole: any) {
    this.dialog
      .open(ScopeFormComponent, { data: sysrole })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.ngOnInit();
      });
  }

  remove(sysrole: any, scope: any) {
    // this.scopeService
    //   .removeScopePermissions({ sysroles: [sysrole.id.sysroleId] }, scope.id)
    //   .subscribe(() => {
    //     this.snack.open('移除成功！', '关闭');
    //     this.ngOnInit();
    //   });
  }

  removeUser(user: any, scope: any) {
    // this.scopeService
    //   .removeScopePermissions({ users: [user] }, scope.id)
    //   .subscribe(() => {
    //     this.snack.open('移除成功！', '关闭');
    //     this.ngOnInit();
    //   });
  }

  openPermission(sysrole: any) {
    this.dialog
      .open(ScopePermissionComponent, { data: sysrole })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.snack.open('授权成功！', '关闭');
          this.onPage(this.pageable);
        }
      });
  }

  onPage(page: PageEvent) {
    this.dataSource = new MatTableDataSource<any>();
    // this.scopeService
    //   .scopeFilter(
    //     this.filters,
    //     page.pageIndex,
    //     page.pageSize,
    //     this.pageable.sort
    //   )
    //   .subscribe((res: any) => {
    //     // console.log(res);
    //     this.dataSource = new MatTableDataSource<any>(res.content);
    //     this.pageable.length = res.totalElements
    //   });
    this.scopeService.filter(ScopeClass,{
      page: 0,
      size: 10,
      sort: []
    },undefined).subscribe((res: any)=>{
      this.dataSource = new MatTableDataSource<any>(res.content);
      this.pageable.length = res.totalElements
    })
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
