import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url = "https://farcelapp.herokuapp.com/";

  options = {
      headers: { "Access-Control-Allow-Origin": "*/*", "cors":"none", "accept": "application/json"},   
  }

  constructor(private http: HttpClient) { }

  enviar() {
    return this.http.get<any>(this.url+"cliente", this.options);
  }
  paquete(paquete:any) {
    return this.http.post<any>(this.url+"paquete", paquete, this.options);
  }


}
