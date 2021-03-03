import { Component, Input, OnInit } from '@angular/core';

import { LancamentosResource } from '../../../interfaces/lancamentosResource.interface';


@Component({
  selector: 'app-latest-statements',
  templateUrl: './latest-statements.component.html',
  styleUrls: ['./latest-statements.component.sass']
})
export class LatestStatementsComponent implements OnInit {

  @Input() transacoes: LancamentosResource[];
  @Input() transacoesCredito: LancamentosResource[];


  statementeAccount = 'débito';
  statementsDiscription = 'GamaAcademy';
  statementsTotal = '298,55';
  statementsDate = '24 de Jan.';

  constructor() { }

  ngOnInit(): void {
  }

}
