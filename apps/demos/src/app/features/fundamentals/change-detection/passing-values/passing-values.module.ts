import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ROUTES } from './passing-values.routes';
import { MatButtonModule } from '@angular/material/button';
import { PushModule, UnpatchEventsModule } from '@rx-angular/template';
import { DirtyChecksModule } from '../../../../shared/debug-helper/dirty-checks';
import { PassingValuesComponent } from './passing-values.component';
import { VisualizerModule } from '../../../../shared/debug-helper/visualizer/visualizer.module';
import { RecursiveReactiveComponent } from './recursive/recursive-reactive.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { CdTriggerModule } from '../../../../shared/debug-helper/cd-trigger/cd-trigger.module';
import { ValueProvidersModule } from '../../../../shared/debug-helper/value-provider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RenderingsModule } from '../../../../shared/debug-helper/renderings';


@NgModule({
  declarations: [PassingValuesComponent, RecursiveComponent, RecursiveReactiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatButtonModule,
    DirtyChecksModule,
    UnpatchEventsModule,
    PushModule,
    VisualizerModule,
    CdTriggerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ValueProvidersModule,
    MatButtonToggleModule,
    RenderingsModule
  ],
  exports: []
})
export class PassingValuesModule {
}
