import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dato:any;
  id:string;

  abrir() {
    window.open('/tareas');
  }
}
