import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harry-potter-api';
  listaEstudents: any[] = [];

  constructor(private rest:RestService) {
    this.listaEstudiantes();
  }
  listaEstudiantes(){
    this.rest.obtenerEstudiantes().toPromise().then((data) => {
      console.log('toPromise', data);
      this.listaEstudents = data;
    })
  }
}
