import { Component } from "@angular/core";
import { PetTableComponent } from "../pet-table.component/pet-table.component"

@Component({
    selector: "main",
    standalone: true,
    imports: [PetTableComponent],
    templateUrl: "./main.component.html",
    styleUrl: './main.component.scss'
})
export class MainComponent {

}