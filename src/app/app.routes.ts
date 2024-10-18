import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { CreatePostComponent } from './pages/posts/create-post/create-post.component';

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
            }
        ]
    }
];
