import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'rxa-cd-embedded-view-parent02',
  template: `
    <h2>
      CD EmbeddedView 02
      <rxa-dirty-check></rxa-dirty-check>
    </h2>

    <button [unpatch] (click)="toggleClick$.next($event)">
      toggle
    </button>

    <div class="row">
      <div class="col">
        <ng-container *poc1If="value1$; let value; falsey: f">
          <rxa-dirty-check></rxa-dirty-check>
          TRUE
          {{value}}
        </ng-container>
      </div>
      <div class="col">
        <ng-container *poc2If="value1$; let value; falsey: f">
          <rxa-dirty-check></rxa-dirty-check>
          TRUE
          {{value}}
        </ng-container>
      </div>
    </div>
    <ng-template #f>
      <rxa-dirty-check></rxa-dirty-check>
      FALSE
    </ng-template>
  `,
  changeDetection: environment.changeDetection
})
export class CdEmbeddedViewParent02Component {
  toggleClick$ = new Subject<Event>();
  value1$ = this.toggleClick$.pipe(
    scan(a => !a, false)
  );
}
