import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { IPet } from "src/app/data-models/pet-struct"
import { Observable } from "rxjs";

@Injectable()
export class PetService {

    constructor(private httpService: HttpService) { }

    public id: number = 100;

    public getObj(ref: string): Observable<IPet[]> {
        return this.httpService.getData<IPet>(ref);
    }

    public postPet(ref: string, body: IPet): Observable<IPet[]> {
        return this.httpService.post(ref, body);
    }

    public getId(): number {
        return this.id;
    }

    public increaseId(): void {
        this.id += 1;
    }

}