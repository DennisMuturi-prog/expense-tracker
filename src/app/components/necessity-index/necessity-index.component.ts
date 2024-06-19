import { Component, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';

@Component({
  selector: 'app-necessity-index',
  standalone: true,
  imports: [ExpenseItemComponent],
  templateUrl: './necessity-index.component.html',
  styleUrl: './necessity-index.component.css',
})
export class NecessityIndexComponent {
  expensesService = inject(ExpensesService);
  necessaryExpenses: Expense[] = [];
  unnecessaryExpenses: Expense[] = [];
  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((res) => {
      this.necessaryExpenses = res.filter(
        (expense) => expense.necessary == true
      );
      this.unnecessaryExpenses = res.filter(
        (expense) => expense.necessary == false
      );
    });
  }
  deleteExpense(expenseId: string | number) {
    this.expensesService.deleteExpense(expenseId).subscribe((res) => {
      console.log(res);
      if (res.necessary == true) {
        this.necessaryExpenses = this.necessaryExpenses.filter(
          (expense) => expense.id !== res.id
        );
      } else {
        this.unnecessaryExpenses = this.unnecessaryExpenses.filter(
          (expense) => expense.id !== res.id
        );
      }
    });
  }
  updateExpense(updatedExpense: Expense) {
    this.expensesService.updateExpense(updatedExpense).subscribe(()=>{
       this.expensesService.getExpenses().subscribe((res) => {
         this.necessaryExpenses = res.filter(
           (expense) => expense.necessary == true
         );
         this.unnecessaryExpenses = res.filter(
           (expense) => expense.necessary == false
         );
       });
    });


  }
}
