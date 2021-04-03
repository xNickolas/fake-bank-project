import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  @Output() showValue = false;

  @Input() saldoConta: number;
  // public showValue = true;


  // totalBalance = '10.000,00';
  totalTransactions = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
