import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from '../../services/home/home.service';
import { Planet } from '../../domain/models/planet.model';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'progress', 'color', 'details'];
  @Input() dataSource: MatTableDataSource<Planet>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.homeService.getPlanets().subscribe((planets: ApiResponse<Planet>) => {
      this.dataSource = new MatTableDataSource(planets.results);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  planetData(planetUrl): void {
    const id = planetUrl.split('/')[5];
    this.router.navigate([`/planets/${id}`]);
  }
}
