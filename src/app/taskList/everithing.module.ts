import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksAddComponent } from './tasks-add/tasks-add.component';
import { TasksFooterComponent } from './tasks-footer/tasks-footer.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AllPageComponent } from './all-page/all-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [TasksAddComponent, TasksFooterComponent, TasksItemComponent, TasksListComponent, AllPageComponent, FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AllPageComponent
  ]
})
export class EverithingModule { }
