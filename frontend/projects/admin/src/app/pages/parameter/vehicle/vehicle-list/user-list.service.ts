
import { HttpClient, HttpParams } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
import { Filtro } from './user-list-model';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    private url = `${environment.host}/veiculos`;

    private filtro : Filtro = {
        nome: "",
        situacao: {},
        vehicleBrand: {},
    };

    constructor(protected http: HttpClient) {}

    getCurrentFiltro(): Filtro{
        return this.filtro;
    }

    setCurrentFiltro(filtro: Filtro){
        this.filtro = filtro;
    }

    findAll(filtro: Filtro, page, size) {

        
        return this.http.get(this.url);
    }

    // updateSituacao(usuario){
    //     const params = new HttpParams()
    //         .set('id', usuario.id);
    //     const httpOptions = {
    //         params
    //     };
    //     return this.http.patch(this.url, usuario, httpOptions);
    // }

    delete(vehicle) {
        return this.http.delete(`${this.url}/${vehicle.id}`);
    }
    
}