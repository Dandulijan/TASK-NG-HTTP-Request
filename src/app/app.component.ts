import { HttpClient } from '@angular/common/http';
import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TASK-NG-HTTP-Request';

  // private http = inject(HttpClient);

  // constructor() {
  //   effect(() => {
  //     this.http
  //       .get('https://pets-react-query-backend.eapi.joincoded.com/pets')
  //       .subscribe((response) => {
  //         console.log(response);
  //       });
  //   });
  // }
}
