import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
    private urlEntrada = "http://localhost:3000/entradas/list";
    private urlCreateEntrada = "http://localhost:3000/entradas/create";
    private urlDeleteEntrada = "http://localhost:3000/entradas/delete/";

    constructor(private httpClient: HttpClient) { }

    getEntradasList():Observable<any>{
        const headers = new HttpHeaders();
            //crear cabeceras vacías
        headers.set('Content-Type','application/json; charset=utf-8');
            //añadir las cabeceras necesarias
        return this.httpClient.get(this.urlEntrada,{headers:headers})
            //devolver la lista de gastos, la url de donde están con sus cabeceras, como en el postman
    }
    createEntrada(entrada):Observable<any>{
        const headers = new HttpHeaders();
            //crear cabeceras vacías
        headers.set('Content-Type','application/json; charset=utf-8');
            //añadir las cabeceras necesarias
        return this.httpClient.post(this.urlCreateEntrada,entrada,{headers:headers})
            //devolver la lista de gastos, la url de donde están con sus cabeceras, como en el postman
    }
    deleteEntrada(id){
        const headers = new HttpHeaders();
          //crear cabeceras vacías
        headers.set('Content-Type','application/json; charset=utf-8');
        return this.httpClient.delete(this.urlDeleteEntrada+id, {headers:headers});
    }
}
