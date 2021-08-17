import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { PlanetDetailContainerComponent } from './container/planet-detail-container/planet-detail-container.component';

const routes: Routes = [
  {path: '', component: HomeContainerComponent},
  {path: ':id', component: PlanetDetailContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
