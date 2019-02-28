import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { Observable, of } from 'rxjs';

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
  heroForm = this.formBuilder.group({
    name: ['', Validators.required],
    power: ['', Validators.required]
  })
  powers: Observable<string[]> = of([''])

  constructor(private formBuilder: FormBuilder, private heroService: HeroService) { }

  ngOnInit() {
    this.powers = this.heroService.getPower()
  }

  onSubmit() {
    this.heroService.logHero({
      id: Math.random(),
      ...this.heroForm.value
    })
  }

}
