import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {
// value是原本的資料
// expon是 testpipe: 10
  transform(value: number, expon=1): unknown {
    return Math.pow(value, expon);
  }

}
