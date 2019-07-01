import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimingTaskAddComponent} from './timing-task-add.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: TimingTaskAddComponent,
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimingTaskAddComponent]
})
export class TimingTaskAddModule {
}