import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AddPetComponent } from "../add-pet-dialog.component/add-pet-dialog.component"
import { IPet, StatusEnum } from "../../data-models/pet-struct"
import { TableModule } from 'primeng/table';
import { PetService } from "../../services/pet.service"
import { HttpService } from "../../services/http.service"
import { Config } from "src/app/config"
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
    selector: "pet-table",
    standalone: true,
    imports: [FormsModule, HttpClientModule, TableModule, ButtonModule, DropdownModule, AddPetComponent, DynamicDialogModule],
    providers: [PetService, HttpService, DialogService, Config],
    templateUrl: "./pet-table.component.html",
    styleUrl: './pet-table.component.scss'
})
export class PetTableComponent implements OnInit {

    constructor(private petService: PetService, private cdRef: ChangeDetectorRef, private dialogService: DialogService) { }

    ref: DynamicDialogRef | undefined;

    public petData: IPet[] = [];
    public condition: StatusEnum = StatusEnum.Available;
    public conditions: StatusEnum[] = [StatusEnum.Available, StatusEnum.Pending, StatusEnum.Sold]

    ngOnInit(): void {
        this.getContent(StatusEnum.Available);
    }

    private getContent(status: string): void {
        this.petData = [];
        this.cdRef.detectChanges();
        this.petService.getPetsByStatus(status).subscribe({
            next: (data: IPet[]) => {
                this.petData = data;
            }
        });
    }

    public showDialogAddPet(): void {
        this.ref = this.dialogService.open(AddPetComponent, {
            header: 'Добавить животное',
            width: '22vw',
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            }
        });

        this.ref.onClose.subscribe((data: IPet) => {
            if (data) {
                this.petService.addPet(data).subscribe(
                    (data: IPet[]) => {
                        this.petData = data;
                    }
                );
                this.ref.destroy();
            }
            else {
                this.ref.destroy();
            }
        });
    }
}