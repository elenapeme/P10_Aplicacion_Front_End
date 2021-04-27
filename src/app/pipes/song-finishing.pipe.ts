import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songFinishing'
})
export class SongFinishingPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    return null;
  }

}
