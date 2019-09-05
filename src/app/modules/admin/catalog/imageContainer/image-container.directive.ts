import {Directive, ViewContainerRef} from '@angular/core';

@Directive ({
  selector: '[image-container]',
})
export class ImageContainerDirective {
  constructor(public viewCointainerRef: ViewContainerRef) {}
}
