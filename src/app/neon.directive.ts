import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNeon]'
})
export class NeonDirective {
  
  @Input() neonColor: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyNeon(this.neonColor || 'royalblue')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyNeon(null)
  }

  private applyNeon(color: string) {
    this.elementRef.nativeElement.style.color = color;
    this.elementRef.nativeElement.style.textShadow = color? `0 0 15px ${color}` : null;
  }

}