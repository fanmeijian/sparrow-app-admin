import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonTreeService } from '@sparrowmini/common-api';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  onTreeSelect($event: any[]) {
    this.formGroup.patchValue({parentId: $event[0]});
  }
  treeNode: any
  submit() {
    this.commonTreeService.upsert('cn.sparrowmini.permission.menu.model.Menu', [this.formGroup.value]).subscribe();
  }
  formGroup: UntypedFormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    icon: new FormControl(),
    url: new FormControl(null, Validators.required),
    target: new FormControl(),
    type: new FormControl(null, Validators.required),
    queryParams: new FormControl(),
    parentId: new FormControl(),
    id: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private commonTreeService: CommonTreeService,
  ) { }
  ngOnInit(): void {
    this.formGroup.disable()
    this.route.params.subscribe((params: any) => {
      const id = params.id
      if (id) {
        this.commonTreeService.get('cn.sparrowmini.permission.menu.model.Menu', id).subscribe(res => {
          this.formGroup.patchValue(res)
          this.treeNode = res
        });
      }
    });

  }
}
