import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPet, StatusEnum, IPetCategory } from "../../data-models/pet-struct"
import { PetService } from "../../services/pet.service"
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
    standalone: true,
    imports: [TableModule, ButtonModule, FormsModule, InputTextModule, InputNumberModule, DropdownModule],
    templateUrl: "./add-pet-dialog.component.html",
    styleUrl: './add-pet-dialog.component.scss'
})
export class AddPetComponent implements OnInit {
    constructor(private dialogRef: DynamicDialogRef, private petService: PetService) { };

    public id: number;
    public petName: string = "";
    public status: StatusEnum;
    public statuses: StatusEnum[] = [StatusEnum.Available, StatusEnum.Pending, StatusEnum.Sold];
    public petCategory: IPetCategory;
    public petCategoryStr: string;
    public categories: string[] = ["Кот", "Пес"]

    ngOnInit(): void {
        this.id = this.petService.getId();
    }

    public onPetCategoryStrChange(value: string): void {
        switch (value) {
            case "Кот":
                this.petCategory = { id: 1, name: "Кот" };
                break;
            case "Пес":
                this.petCategory = { id: 2, name: "Пес" };
                break;
            default:
                this.petCategory = { id: 0, name: "" };
        }
    }

    public closeDialog(data?: IPet) {
        this.petService.increaseId();
        this.dialogRef.close(data);
        this.dialogRef.destroy();
    }

    public addPet() {
        this.closeDialog({
            id: this.id,
            category: this.petCategory,
            name: this.petName,
            photoUrls: [
                ""
            ],
            tags: [
                {
                    id: 0,
                    name: ""
                }
            ],
            status: this.status
        });
    }
}