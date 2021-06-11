import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector : '[bgblue]'
})

export class bgblueDirective {
    constructor(el: ElementRef){

        el.nativeElement.style.backgroundColor="blue"

    }
}