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
        headers.set('Content-Type','application/json; charset=utf-8');
        return this.httpClient.get(this.urlEntrada,{headers:headers})
    }
    createEntrada(entrada):Observable<any>{
        const headers = new HttpHeaders();
        headers.set('Content-Type','application/json; charset=utf-8');
        return this.httpClient.post(this.urlCreateEntrada,entrada,{headers:headers})
    }
    deleteEntrada(id){
        const headers = new HttpHeaders();
        headers.set('Content-Type','application/json; charset=utf-8');
        this.urlEntrada=this.urlDeleteEntrada+id;
        return this.httpClient.delete(this.urlEntrada, {headers:headers});
    }
}
