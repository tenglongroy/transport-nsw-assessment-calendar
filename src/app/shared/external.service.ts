import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ExternalService {

    constructor(private http: HttpClient) { }

    getAlert(): Observable<any> {
        return this.http.get<any>('https://api.transport.nsw.gov.au/v1/tp/add_info', {
            headers: {Authorization: 'apikey ' + environment.APIKEY}
        });
    }
}