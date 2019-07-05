import { Component, OnInit } from '@angular/core';
import { IEntradas } from '../models/ientradas';
import { EntradaService } from '../services/entrada.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    entradasList: Array<IEntradas>;
    constructor(private entradaService: EntradaService) { }

    ngOnInit() {
        this.getEntradasList();
    }
    getEntradasList() {
        this.entradaService.getEntradasList().subscribe(data => {
            this.entradasList = data;
        });
    }
    deleteEntrada(entrada){
        this.entradaService.deleteEntrada(entrada).subscribe( data => {
            this.getEntradasList();
        });
    };

}
