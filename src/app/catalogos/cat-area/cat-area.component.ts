import { Component, OnInit } from '@angular/core';
import { Catarea } from 'src/app/model/catarea.model';
import { AreaService } from 'src/app/service/cat.area.service';

@Component({
  selector: 'app-cat-area',
  templateUrl: './cat-area.component.html',
  providers: [AreaService]
})
export class CatAreaComponent implements OnInit {

  arrayAreas: Catarea[];

  constructor( private areaService: AreaService ) { }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      (data: Catarea[]) => this.arrayAreas = data
    );
  }

}
