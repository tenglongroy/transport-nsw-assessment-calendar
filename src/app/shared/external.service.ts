import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ExternalService {

    constructor(private http: HttpClient) { }

    getAddInfo(extraParam: {}): Observable<any> {
        const newParams = Object.assign({outputFormat: 'rapidJSON', version: '10.2.1.42', filterPublicationStatus: 'current'}, extraParam);
        let httpParams = new HttpParams();
        Object.keys(newParams).forEach(key => {
            httpParams = httpParams.append(key, newParams[key]);
        });
        return this.http.get<any>('https://jaideportal-functionapi-public-dev.azurewebsites.net/tfnsw'/* 'https://api.transport.nsw.gov.au/v1/tp/add_info' */, {
            headers: {
                Authorization: 'apikey ' + environment.APIKEY,
                'Content-Type': 'application/json',
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            },
            params: httpParams
        });
    }
}