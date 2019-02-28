import { Component, OnInit } from '@angular/core';

/**
 *
 * Reactive form
 *
 * more robust: they're more scalable, reusable, and testable.
 * If forms are a key part of your application,
 * or you're already using reactive patterns for building your application, use reactive forms.
 *
 */

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
