import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wizardId'
})
export class WizardIdPipe implements PipeTransform {

  transform(value: number): string {
    let strNumber = value + '';
    let nbZeros = 3 - strNumber.length;
    for(let i = 0; i < nbZeros; i++){
      strNumber = '0' + strNumber;
    }
    return strNumber;
  }

}
