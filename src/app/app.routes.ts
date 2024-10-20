import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { CreatePostComponent } from './pages/posts/create-post/create-post.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'layout',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
  
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: 'createPost',
                component: CreatePostComponent
            },
            { 
                path: 'profile',
                component: ProfileSettingsComponent
            }
         
        ]
    }
];
