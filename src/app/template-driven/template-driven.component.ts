import { Component, OnInit } from '@angular/core';

/**
 *
 * Template-driven form
 *
 * useful for adding a simple form to an app, such as an email list signup form.
 * They're easy to add to an app, but they don't scale as well as reactive forms.
 * If you have very basic form requirements and logic that can be managed solely in the template, use template-driven forms.
 *
 *
 */

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
