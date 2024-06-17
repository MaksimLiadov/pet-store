import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Config } from "src/app/config"
import { IPet } from "src/app/data-models/pet-struct"
import { Observable } from "rxjs";

@Injectable()
export class PetService {
    private readonly controller: string = 'pet';

    constructor(private httpService: HttpService, private config: Config) { }

    public id: number = 100;

    public getPetsByStatus(status: string): Observable<IPet[]> {
        return this.httpService.getData<IPet>(`${this.config.getBackendUrl()}/${this.controller}/findByStatus?status=${status}`);
    }

    public addPet(body: IPet): Observable<IPet[]> {
        return this.httpService.post(`${this.config.getBackendUrl()}/${this.controller}`, body);
    }

    public getId(): number {
        return this.id;
    }

    public increaseId(): void {
        this.id += 1;
    }

}