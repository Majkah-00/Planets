import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Starship } from '../../domain/models/starship.model';
import { Router } from '@angular/router';
import { StarshipsService } from '../../services/starships/starships.service';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-starships-table',
  templateUrl: './starships-table.component.html',
  styleUrls: ['./starships-table.component.scss']
})
export class StarshipsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'model', 'length', 'details'];
  @Input() dataSource: MatTableDataSource<Starship>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private starshipsService: StarshipsService,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.starshipsService.getStarships().subscribe((starship: ApiResponse<Starship>) => {
    //   console.log(starship);
    //   this.dataSource = new MatTableDataSource(starship.results);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  starshipData(starshipUrl): void {
    const id = starshipUrl.split('/')[5];
    this.router.navigate([`/starships/${id}`]);
  }

}
