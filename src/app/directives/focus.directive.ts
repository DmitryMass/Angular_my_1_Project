import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit, AfterViewInit {
  constructor(private elem: ElementRef) {}

  ngAfterViewInit(): void {
    this.elem.nativeElement.focus();
  }
  ngOnInit(): void {}
}
