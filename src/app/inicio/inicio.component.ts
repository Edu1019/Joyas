import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit, AfterViewInit {
  @ViewChild('whatsappIcon') whatsappIcon!: ElementRef;
  @ViewChild('whatsappMessage') whatsappMessage!: ElementRef;

  //Redes sociales

  ngOnInit(): void {
    // Lógica de inicialización, si es necesario
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') { // Ejecutar solo en el navegador
      this.setupWhatsappMessage();
    }
  }
  
  setupWhatsappMessage(): void {
    const message = this.whatsappMessage.nativeElement;
    const icon = this.whatsappIcon.nativeElement;

    // Mostrar mensaje al pasar el ratón
    icon.addEventListener('mouseenter', () => {
      message.style.display = 'block';
    });

    // Ocultar mensaje al salir del ratón
    icon.addEventListener('mouseleave', () => {
      message.style.display = 'none';
    });

    // Mostrar mensaje cada 30 segundos
    setInterval(() => {
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, 5000); // El mensaje desaparece después de 5 segundos
    }, 30000); // Intervalo de 30 segundos
  }

  //Logo

  refreshPage(): void{
    window.location.reload();
  }
  
  //Pasar de p+agina en página

  constructor(private router:Router){}

  redirigir(): void{
    this.router.navigate(['/entregas']);
  }

  redirigirDos(): void{
    this.router.navigate(['/info']);
  }



}
