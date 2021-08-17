import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Planet } from '../../domain/models/planet.model';
import { HomeService } from '../../services/home/home.service';
import { ApiResponse } from '../../../../shared/models/api-response.model';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  dataSource: MatTableDataSource<Planet>;
  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getPlanets().subscribe((planets: ApiResponse<Planet>) => {
      this.dataSource = new MatTableDataSource(planets.results);
    });
  }
}
