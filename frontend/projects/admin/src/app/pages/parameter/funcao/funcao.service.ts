
import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
import { map } from 'rxjs/operators';
import { Funcao } from './funcao.model';

@Injectable({
    providedIn: 'root'
})
export class FuncaoService {

    private url = environment.host;

    constructor(protected http: HttpClient) {}

    getFuncao() {
        return this.http.get<any>(`${this.url}/funcao`).pipe(
            map(result=>{
                return result.map((x: any) => {
                    return Object.assign(new Funcao(), x);
                });
            }
        ));
    }
}