import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title: string;

  constructor(public coreService: CoreService) {
  }

  ngOnInit(): void {
    this.coreService.subject.subscribe(result => {
      this.title = result;
    });
  }
}
