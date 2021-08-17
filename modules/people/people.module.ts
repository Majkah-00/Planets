import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleContainerComponent } from './container/people-container/people-container.component';
import { PeopleTableComponent } from './presenter/people-table/people-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { PeopleDetailContainterComponent } from './container/people-detail-containter/people-detail-containter.component';
import { PeopleDetailComponent } from './presenter/people-detail/people-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PeopleContainerComponent,
    PeopleTableComponent,
    PeopleDetailContainterComponent,
    PeopleDetailComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class PeopleModule {
}
