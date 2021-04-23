import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSongs = [];
    for(const song of value){
      if(song.style.indexOf(arg) > -1){
         resultSongs.push(song);
      };
    };
    return resultSongs;
  }

}
