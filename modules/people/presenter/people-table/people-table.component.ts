import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../../domain/models/person.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'height', 'details'];
  @Input() dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() item = '';

  constructor(private peopleService: PeopleService,
              private router: Router) { }

  ngOnInit(): void {
    // this.peopleService.getPeople().subscribe((people: ApiResponse<Person>) => {
    //   this.dataSource = new MatTableDataSource(people.results);
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

  personData(personUrl): void {
    const id = personUrl.split('/')[5];
    this.router.navigate([`/people/${id}`]);
  }
}
