import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships/starships.service';
import { MatTableDataSource } from '@angular/material/table';
import { Starship } from '../../domain/models/starship.model';
import { ApiResponse } from '../../../../shared/models/api-response.model';

@Component({
  selector: 'app-starships-container',
  templateUrl: './starships-container.component.html',
  styleUrls: ['./starships-container.component.scss']
})
export class StarshipsContainerComponent implements OnInit {
  dataSource: MatTableDataSource<Starship>;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.starshipsService.getStarships().subscribe((starship: ApiResponse<Starship>) => {
      console.log(starship);
      this.dataSource = new MatTableDataSource(starship.results);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });
  }

}
