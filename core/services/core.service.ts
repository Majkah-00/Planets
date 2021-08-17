import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../menu-item.enum';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  subject = new BehaviorSubject(MenuItem.Planets);
}
