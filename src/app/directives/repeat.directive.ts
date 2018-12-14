import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  el:ElementRef;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  @Input()
  set repeat(value:number){
    let innerHTML = this.el.nativeElement.innerHTML;
    for(let i = 0; i < value - 1; i++)
      this.el.nativeElement.innerHTML += innerHTML;
  }

}
