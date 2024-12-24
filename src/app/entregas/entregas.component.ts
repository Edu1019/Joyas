import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregas',
  standalone: true,
  imports: [],
  templateUrl: './entregas.component.html',
  styleUrl: './entregas.component.css'
})
export class EntregasComponent {

  constructor(private router: Router){}

  regresar(): void{
    this.router.navigate(['/inicio']);
  }

}
