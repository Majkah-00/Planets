import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Planet } from '../../../home/domain/models/planet.model';
import { Person } from '../../domain/models/person.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../../home/services/home/home.service';
import { PeopleService } from '../../services/people/people.service';
import { ApiResponse } from '../../../../shared/models/api-response.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  id: number;
  name: string;
  height: string;
  created: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  edited: string;
  dataSource: MatTableDataSource<Person>;

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    created: new FormControl('', Validators.required),
    mass: new FormControl('', Validators.required),
    hairColor: new FormControl('', Validators.required),
    skinColor: new FormControl('', Validators.required),
    eyeColor: new FormControl('', Validators.required),
    birthYear: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    homeworld: new FormControl('', Validators.required),
    edited: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
              private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      console.log(params);
    });

    this.peopleService.getPerson(this.id).subscribe((people: ApiResponse<Person>) => {
      console.log(people);
      this.dataSource = new MatTableDataSource(people.results);
      this.form.patchValue(people);
    });
  }

}
