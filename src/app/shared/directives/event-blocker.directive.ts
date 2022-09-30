import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-event-blocker]',
})
export class EventBlockerDirective {
  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  public handleevent(event: Event) {
    event.preventDefault();
    event.stopPropagation(); // prevent bubbling
  }
}
