import { Component, Input, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { MenuItem } from '../menu-item.interface';

@Component({
  selector: 'rx-angular-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent extends RxState<{ menuItem: MenuItem }>{

  menuItem$ = this.select('menuItem')
  @Input()
  set menuItem(menuItem: MenuItem) {
    this.set({menuItem})
  }

}
