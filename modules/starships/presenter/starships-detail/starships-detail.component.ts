import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Starship } from '../../domain/models/starship.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from '../../services/starships/starships.service';
import { ApiResponse } from '../../../../shared/models/api-response.model';

@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html',
  styleUrls: ['./starships-detail.component.scss']
})
export class StarshipsDetailComponent implements OnInit {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  length: string;
  crew: string;
  passengers: string;
  created: string;
  edited: string;
  dataSource: MatTableDataSource<Starship>;

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    manufacturer: new FormControl('', Validators.required),
    length: new FormControl('', Validators.required),
    crew: new FormControl('', Validators.required),
    passengers: new FormControl('', Validators.required),
    created: new FormControl('', Validators.required),
    edited: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
              private starshipsService: StarshipsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      console.log(params);
    });

    this.starshipsService.getStarship(this.id).subscribe((starship: ApiResponse<Starship>) => {
      console.log(starship);
      this.dataSource = new MatTableDataSource(starship.results);
      this.form.patchValue(starship);
    });
  }

}
