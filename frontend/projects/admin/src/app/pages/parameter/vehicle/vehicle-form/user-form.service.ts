
import { HttpClient, HttpParams } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
import { UserForm } from './user-form.model';

@Injectable({
    providedIn: 'root'
})
export class UserFormService {

    private url = `${environment.host}/veiculos`;

    constructor(protected http: HttpClient) {}

    save(userForm: UserForm) {
        console.log(userForm);
        return this.http.post(this.url, userForm);
    }

    update(userForm: UserForm) {
        console.log(userForm);
        return this.http.put(`${this.url}/${userForm.id}`, userForm);
    }
}