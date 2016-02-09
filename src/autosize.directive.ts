import { ElementRef, HostListener, Directive} from 'angular2/core';

@Directive({
    selector: 'textarea[autosize]'
})

export class Autosize {
 @HostListener('input',['$event.target'])
  onInput(textArea) {
    this.adjust();
  }
  constructor(public element: ElementRef){
  }
  ngOnInit(){
    this.adjust();
  }
  adjust(){
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
  }
}
