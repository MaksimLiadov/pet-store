import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AddPetComponent } from "../add-pet-dialog.component/add-pet-dialog.component"
import { IPet, StatusEnum } from "../../data-models/pet-struct"
import { ApiLinksEnum } from "src/app/data-models/api-links"
import { TableModule } from 'primeng/table';
import { PetService } from "../../services/pet.service"
import { HttpService } from "../../services/http.service"
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
    selector: "pet-table",
    standalone: true,
    imports: [FormsModule, HttpClientModule, TableModule, ButtonModule, DropdownModule, AddPetComponent, DynamicDialogModule],
    providers: [PetService, HttpService, DialogService],
    templateUrl: "./pet-table.component.html",
    styleUrl: './pet-table.component.scss'
})
export class PetTableComponent implements OnInit {

    constructor(private petService: PetService, private cdRef: ChangeDetectorRef, private dialogService: DialogService) { }

    ref: DynamicDialogRef | undefined;

    public petData: IPet[] = [];
    public condition: StatusEnum;
    public conditions: StatusEnum[] = [StatusEnum.Available, StatusEnum.Pending, StatusEnum.Sold]

    ngOnInit(): void {
        this.downloadContent(ApiLinksEnum.GetAvailablePet);
    }

    private downloadContent(ref: string): void {
        this.petData = [];
        this.cdRef.detectChanges();
        this.petService.getObj(ref).subscribe({
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
                this.petService.postPet(ApiLinksEnum.PostPet, data).subscribe({
                    next: (data: IPet[]) => {
                        this.petData = data;
                    }
                });
                this.ref.destroy();
            }
            else {
                this.ref.destroy();
            }
        });
    }

    public onConditionChange(condition: StatusEnum): void {
        switch (condition) {
            case StatusEnum.Available:
                this.downloadContent(ApiLinksEnum.GetAvailablePet);
                break;
            case StatusEnum.Sold:
                this.downloadContent(ApiLinksEnum.GetSoldPet);
                break;
            case StatusEnum.Pending:
                this.downloadContent(ApiLinksEnum.GetPendingPet);
                break;
            default:
                break;
        }

    }
}