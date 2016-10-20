import { Directive, ElementRef, HostListener, Input, SimpleChange, Renderer } from '@angular/core';

@Directive({
    selector: 'textarea[autosize]'
})
export class Autosize {
  @Input() autosize: string;
  
  constructor(public renderer: Renderer, public element: ElementRef) {
      this.renderer.setElementAttribute(this.element.nativeElement, 'rows', '1');
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    this.adjust();
  }
  
  adjust(): void{
    this.renderer.setElementStyle(this.element.nativeElement, 'overflow', 'hidden');
    this.renderer.setElementStyle(this.element.nativeElement, 'height', 'auto');
    let scrollHeight = this.element.nativeElement.scrollHeight;
    if(scrollHeight > 0) {
      this.renderer.setElementStyle(this.element.nativeElement, 'height', scrollHeight + 'px');
    }
  }
}