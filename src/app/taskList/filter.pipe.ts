import { Pipe, PipeTransform } from '@angular/core';

import {validFilter} from '../filter/filter.action';
import {All} from './models/all.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(homeworks: All[], filter: validFilter): All[] {
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
