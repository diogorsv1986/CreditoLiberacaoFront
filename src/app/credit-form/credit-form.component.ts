// credit-form.component.ts
import { Component } from '@angular/core';
import { CreditApiService } from '../credit-api.service';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent {
  creditAmount: number = 0; // Inicialização com valor padrão
  creditType: number = 1; // Inicialização com valor padrão
  installments: number = 5; // Inicialização com valor padrão
  firstDueDate: string = new Date().toISOString().split('T')[0]; // Data atual como valor padrão

  result: any;
  resultAvailable: boolean = false;

  minDate: string;
  maxDate: string;

  constructor(private creditApiService: CreditApiService) {
    const today = new Date();
    this.minDate = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    this.maxDate = new Date(today.getTime() + 40 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  }

  onSubmit() {
    const requestData = {
      CreditAmount: this.creditAmount,
      Type: this.creditType,
      Installments: this.installments,
      FirstDueDate: this.firstDueDate
    };

    this.creditApiService.processCreditRequest(requestData)
      .subscribe(
        result => {
          this.result = result;
          this.resultAvailable = true;
        },
        error => {
          console.error(error);
          // Tratar erros
        }
      );
  }
}
