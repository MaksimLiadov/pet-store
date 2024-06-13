import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, interval, take } from "rxjs";
import { switchMap } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    public getData<httpData>(ref: string): Observable<httpData[]> {
        return this.http.get<httpData[]>(ref).pipe(
            take(10)
        );
        // return interval(1000).pipe(
        //     switchMap(() => this.http.get<httpData[]>(ref))
        // );
    }

    public post<httpData>(ref: string, body: object): Observable<httpData[]> {
        return this.http.post<httpData[]>(ref, body);
    }

}
