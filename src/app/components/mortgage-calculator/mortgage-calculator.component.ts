import { Component } from '@angular/core';
import { MortgageCalculatorService } from '../../services/mortgage-calculator.service';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent {
  principal: number = 0;
  interestRate: number = 0;
  loanTerm: number = 0;
  monthlyPayment: number = 0;

  constructor(private mortgageCalculator: MortgageCalculatorService) { }

  onCalculate(): void {
    this.monthlyPayment = this.mortgageCalculator.calculateMortgage(this.principal, this.interestRate, this.loanTerm);
  }
}
