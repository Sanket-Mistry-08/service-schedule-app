import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[simpleRadio]'
})
export class SimpleRadio implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.el.nativeElement.classList.add('custom-radio');
    }

    @HostListener('click') onClick() {
        let active_radio = document.querySelectorAll('.custom-radio.active')
        active_radio.forEach(el => el.classList.remove('active'))
        this.el.nativeElement.classList.toggle('active')
    }
}