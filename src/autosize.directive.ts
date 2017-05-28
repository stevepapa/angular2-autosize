import { ElementRef, HostListener, Directive} from '@angular/core';

const MAX_LOOKUP_RETRIES = 3;
@Directive({
    selector: '[autosize]'
})

export class Autosize {
 @HostListener('input',['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }
  private retries: number = 0;
  private textAreaEl: any;
  constructor(public element: ElementRef) {
     if (this.element.nativeElement.tagName !== 'TEXTAREA') {
       this._findNestedTextArea();

     } else {
       this.textAreaEl = this.element.nativeElement;
     }
  }
  _findNestedTextArea() {
     this.textAreaEl = this.element.nativeElement.getElementsByTagName('TEXTAREA')[0];
     if (!this.textAreaEl) {
       if (this.retries >= MAX_LOOKUP_RETRIES) {
         console.warn('angular2-autosize: textarea not found');

       } else {
         this.retries++;
         setTimeout(() => {
           this._findNestedTextArea();
         }, 100);
       }
     }
  }
  ngAfterContentChecked(): void{
    this.adjust();
  }
  adjust(): void {
    if (this.textAreaEl) {
      this.textAreaEl.style.overflow = 'hidden';
      this.textAreaEl.style.height = 'auto';
      this.textAreaEl.style.height = this.textAreaEl.scrollHeight + "px";
    }
  }
}
