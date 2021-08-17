import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsContainerComponent } from './container/starships-container/starships-container.component';
import { StarshipsDetailContainerComponent } from './container/starships-detail-container/starships-detail-container.component';
import { StarshipsTableComponent } from './presenter/starships-table/starships-table.component';
import { StarshipsDetailComponent } from './presenter/starships-detail/starships-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    StarshipsContainerComponent,
    StarshipsDetailContainerComponent,
    StarshipsTableComponent,
    StarshipsDetailComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class StarshipsModule { }
