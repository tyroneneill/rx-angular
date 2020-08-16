import { Component, Input } from '@angular/core';
import { RxState, setProp } from '@rx-angular/state';
import { MenuItem } from '../menu-item.interface';

@Component({
  selector: 'rx-angular-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent extends RxState<{ menuItem: MenuItem }> {

  menuItem$ = this.select('menuItem');

  @Input()
  set menuItem(menuItem: MenuItem) {
    this.set('menuItem', _ =>
      setProp(menuItem, 'children', menuItem.children
          .map(c => setProp(c, 'link', menuItem.link + '\/' + c.link))
      )
    );
  }

}
