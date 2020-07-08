import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { Titulo: 'Dashboard'}},
            { path: 'progress', component: ProgressComponent, data: { Titulo: 'Progress'}},
            { path: 'graficas1', component: Graficas1Component, data: { Titulo: 'Gráficas'}},
            { path: 'promesas', component: PromesasComponent, data: { Titulo: 'Promesas'}},
            { path: 'rxjs', component: RxjsComponent, data: { Titulo: 'RxJs'}},
            { path: 'account-settings', component: AccountSettingsComponent, data: { Titulo: 'Ajustes del tema'}},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );