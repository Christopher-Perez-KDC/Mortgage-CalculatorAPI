import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

  constructor() { }

  calculateMortgage(principal: number, interestRate: number, loanTerm: number): number {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;

    // Monthly mortgage payment
    const mortgagePayment = principal * monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return mortgagePayment;
  }
}
