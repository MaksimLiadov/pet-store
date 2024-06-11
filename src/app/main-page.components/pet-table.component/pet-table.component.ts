import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IPet, StatusEnum } from "../../data-models/pet-struct"
import { TableModule } from 'primeng/table';
import { PetService } from "../../services/pet.service"
import { HttpService } from "../../services/http.service"
import { ButtonModule } from 'primeng/button';

@Component({
    selector: "pet-table",
    standalone: true,
    imports: [FormsModule, HttpClientModule, TableModule, BrowserAnimationsModule, ButtonModule],
    providers: [PetService, HttpService],
    templateUrl: "./pet-table.component.html",
    styleUrl: './pet-table.component.scss'
})
export class PetTableComponent implements OnInit {

    constructor(private petService: PetService, private cdRef: ChangeDetectorRef) { }

    public petData: IPet[] = [];

    ngOnInit(): void {

        this.downloadContent();
    }

    public downloadContent(): void {
        this.petData = [];
        this.cdRef.detectChanges();
        //available
        let ref2 = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";
        this.petService.getObj(ref2).subscribe({
            next: (data: IPet[]) => {
                this.petData = data;
            }
        });
    }

    public showDialogAddPet(): void {
        console.log("show");
    }

}