import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    public getData<httpData>(ref: string): Observable<httpData[]> {
        console.log("finish ref: " + ref);
        return this.http.get<httpData[]>(ref);
    }

    public post<httpData>(ref: string, body: object): Observable<httpData[]> {
        return this.http.post<httpData[]>(ref, body);
    }

}
