import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { EntregasComponent } from './entregas/entregas.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'info', component: InfoComponent},
    {path: 'entregas', component: EntregasComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}, //Inicia por defecto en esta página
];
