import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { Planet } from '../../domain/models/planet.model';
import { HomeService } from '../../services/home/home.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  id: number;
  diameter: string;
  name: string;
  created: string;
  gravity: string;
  orbitalPeriod: string;
  population: string;
  rotationPeriod: string;
  surfaceWater: string;
  terrain: string;
  dataSource: MatTableDataSource<Planet>;

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    diameter: new FormControl('', Validators.required),
    created: new FormControl('', Validators.required),
    gravity: new FormControl('', Validators.required),
    orbitalPeriod: new FormControl('', Validators.required),
    population: new FormControl('', Validators.required),
    rotationPeriod: new FormControl('', Validators.required),
    surfaceWater: new FormControl('', Validators.required),
    terrain: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this.homeService.getPlanet(this.id).subscribe((planets: ApiResponse<Planet>) => {
      this.dataSource = new MatTableDataSource(planets.results);
      this.form.patchValue(planets);
    });
  }
}
