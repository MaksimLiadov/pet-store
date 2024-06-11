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
        // return interval(1000).pipe( // отправляем запрос каждую секунду
        //     switchMap(() => this.http.get<httpData[]>(ref))
        // );
    }

    public postObj(ref: string, body: object): void {
        console.log("ref: " + ref);
        console.log("body: " + JSON.stringify(body));
        body = {
            id: 11,
            category: {
                id: 1,
                name: "lexy"
            },
            name: "doggie",
            photoUrls: [
                "string"
            ],
            tags: [
                {
                    id: 0,
                    name: "string"
                }
            ],
            status: "sold"
        }

        this.http.post(ref, body);
    }

}
