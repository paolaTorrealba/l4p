import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCuposFilas]'
})

export class CuposFilasDirective {
  constructor(private el: ElementRef) {
  }

  @Input('appCuposFilas') cupos: number;

  ngAfterViewInit() {
    console.log("cupos", this.cupos)
    if (this.cupos < 10)
      this.el.nativeElement.style.backgroundColor = "red";
    else if (this.cupos >= 20)
      this.el.nativeElement.style.backgroundColor = "green";
    else
      this.el.nativeElement.style.backgroundColor = "yellow";
  }
}
