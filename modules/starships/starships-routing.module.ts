import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsContainerComponent } from './container/starships-container/starships-container.component';
import { StarshipsDetailContainerComponent } from './container/starships-detail-container/starships-detail-container.component';

const routes: Routes = [
  {path: '', component: StarshipsContainerComponent},
  {path: ':id', component: StarshipsDetailContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
