import { Component, OnInit } from '@angular/core';

import { AreaService } from 'src/app/service/cat.area.service';

import {Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  constructor(private areaService: AreaService,
    private formBuilder: FormBuilder, private router: Router,) { }

    addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required]
    });
  }
  onSubmit() {
    this.areaService.create( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['/clientes']);
        
      });
  }


}
