import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: SidebarComponent,
        children: [
            {
                path: 'projects',
                component: ProjectComponent
            }
        ]
    }
];
