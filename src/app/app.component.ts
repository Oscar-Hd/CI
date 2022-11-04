import { Component, OnInit } from '@angular/core';
import { RestServices } from './Vista/principal/restaurantes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  restaurantes:any;

  constructor(public rest:RestServices){}

  ngOnInit()
  {
    this.rest.getRest().subscribe
    ({
      next:(r) => {this.restaurantes = r; console.log(r)},
      error: (e) => {console.error(e)}
    }
    )
  }
}
