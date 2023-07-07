import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[toggleRadio]'
})
export class CustomRadio implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.el.nativeElement.classList.add('custom-radio');
    }

    @HostListener('click') onClick() {
        this.el.nativeElement.classList.toggle('active');
    }
}