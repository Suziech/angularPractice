import { Component } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert-component.html",
  styles: [
    `
      p {
        color: green;
        background-color: palegreen;
        border: 1px solid green;
        padding: 5px;
      }
    `,
  ],
  // styleUrls: ["./success-alert-component.css"],
})
export class SuccessAlertComponent {}
