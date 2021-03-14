import { Pipe, PipeTransform } from '@angular/core';

import {validFilter} from '../filter/filter.action';
import {TaskModel} from './models/task.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(homeworks: TaskModel[], filter: validFilter): TaskModel[] {
    switch (filter) {
      case 'completed':
        return homeworks.filter(task => task.completed);
      case 'pending':
        return homeworks.filter(task => !task.completed);
      default:
        return homeworks;
    }

  }

}
