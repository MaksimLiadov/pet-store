import { Component } from "@angular/core";
import { PetTableComponent } from "../pet-table.component/pet-table.component"
import { ToolbarComponent } from "../toolbar.component/toolbar.component"

@Component({
    selector: "main",
    standalone: true,
    imports: [PetTableComponent, ToolbarComponent],
    templateUrl: "./main.component.html",
    styleUrl: './main.component.scss'
})
export class MainComponent {

}