import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { Person } from '../../domain/models/person.model';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people-container',
  templateUrl: './people-container.component.html',
  styleUrls: ['./people-container.component.scss']
})
export class PeopleContainerComponent implements OnInit {
  dataSource: MatTableDataSource<Person>;
  currentItem = 'Zabierz to gowno ode mnie';

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((people: ApiResponse<Person>) => {
      this.dataSource = new MatTableDataSource(people.results);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });
  }

}
