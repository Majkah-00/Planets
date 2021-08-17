import { Component } from '@angular/core';
import { CoreService } from '../services/core.service';
import { MenuItem } from '../menu-item.enum';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.scss']
})
export class MenuDrawerComponent {
  MenuItem = MenuItem;

  constructor(private coreService: CoreService) {
  }

  chooseTitle(expression: MenuItem): void {
    switch (expression) {
      case MenuItem.People: {
        this.coreService.subject.next(MenuItem.People);
        break;
      }
      case MenuItem.Planets: {
        this.coreService.subject.next(MenuItem.Planets);
        break;
      }
      case MenuItem.Starships: {
        this.coreService.subject.next(MenuItem.Starships);
        break;
      }
    }
  }
}
