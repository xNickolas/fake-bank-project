import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Plans } from 'src/app/modules/logged-area/interfaces/plans.interface';

import { PlanService } from './plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.sass']
})
export class PlansComponent implements OnInit {

  plans: Plans[];

  constructor(
    private plansService: PlanService,
  ) { }

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans() {
    this.plansService.getPlans()
    .pipe(
      take(1),
    )
    .subscribe(
      response => this.onSucessPlans(response)
    );
  }

  onSucessPlans(response: Plans[]) {
    this.plans = response;
  }

}
