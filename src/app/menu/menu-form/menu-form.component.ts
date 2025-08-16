import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonTreeService } from '@sparrowmini/common-api';
import { MenuClass } from '../menu.constant';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  onTreeSelect($event: any[]) {
    this.formGroup.patchValue({ parentId: $event[0] });
  }
  treeNode: any
  submit() {
    this.commonTreeService.upsert(MenuClass, [this.formGroup.value]).subscribe();
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
    this.route.params.subscribe((params: any) => {
      const id = params.id
      if (id && id!=='new') {
        this.formGroup.disable()
        this.commonTreeService.get(MenuClass, id).subscribe(res => {
          this.formGroup.patchValue(res)
          this.treeNode = res
        });
      }else{
        this.formGroup.enable()
        this.formGroup.reset()
      }
    });

  }
}
