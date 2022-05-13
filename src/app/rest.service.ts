import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private listaObj:any = {
    "Students":"http://hp-api.herokuapp.com/api/characters/students",
  }

  constructor(
    private http: HttpClient
  ) {}
  obtenerEstudiantes(): Observable<any>{
    const url= this.listaObj.students;
    return this.http.get(url)
  }
}
