import { Router } from '@angular/router';
import { Injectable, Inject } from "@angular/core";

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(activatedRouteSnapshot: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("********************- JwtInterceptor -**********************");
        return next.handle(req.clone({
            // setHeaders: {
            //     Authorization: 'Bearer JWT01010101'
            // }
        })).pipe(retry(2));
    }
}