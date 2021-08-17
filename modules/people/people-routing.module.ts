import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleContainerComponent } from './container/people-container/people-container.component';
import { PeopleDetailContainterComponent } from './container/people-detail-containter/people-detail-containter.component';

const routes: Routes = [
  {path: '', component: PeopleContainerComponent},
  {path: ':id', component: PeopleDetailContainterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
