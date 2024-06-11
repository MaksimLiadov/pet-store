import { Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: "toolbar",
    standalone: true,
    imports: [FormsModule, HttpClientModule, ButtonModule],
    providers: [DialogService],
    templateUrl: "./toolbar.component.html",
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

    public showDialogAddPet(): void {
        console.log("show");
    }
}