import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'planets',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'people',
        loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
      },
      {
        path: '',
        redirectTo: '/planets',
        pathMatch: 'full'
      },
      {
        path: 'starships',
        loadChildren: () => import('./modules/starships/starships.module').then(m => m.StarshipsModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
