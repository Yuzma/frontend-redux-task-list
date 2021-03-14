import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksAddComponent } from './tasks-add/tasks-add.component';
import { TasksFooterComponent } from './tasks-footer/tasks-footer.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [TasksAddComponent, TasksFooterComponent, TasksItemComponent, TasksListComponent, TasksPageComponent, FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TasksPageComponent
  ]
})
export class EverithingModule { }
