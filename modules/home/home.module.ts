import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TableComponent } from './presenters/table/table.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import './domain/string.formater';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlanetDetailComponent } from './presenters/planet-detail/planet-detail.component';
import { PlanetDetailContainerComponent } from './container/planet-detail-container/planet-detail-container.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TableComponent,
    HomeContainerComponent,
    PlanetDetailComponent,
    PlanetDetailContainerComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
})
export class HomeModule { }
