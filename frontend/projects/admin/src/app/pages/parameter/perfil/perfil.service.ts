
import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
import { map } from 'rxjs/operators';
import { Perfil } from './perfil.model';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {

    private url = environment.host;

    constructor(protected http: HttpClient) {}

    getPerfil() {
        return this.http.get<any>(`${this.url}/perfil`).pipe(
            map(result=>{
                return result.map((x: any) => {
                    return Object.assign(new Perfil(), x);
                });
            }
        ));
    }
}