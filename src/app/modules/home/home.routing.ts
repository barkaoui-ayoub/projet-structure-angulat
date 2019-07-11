import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomePageComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }