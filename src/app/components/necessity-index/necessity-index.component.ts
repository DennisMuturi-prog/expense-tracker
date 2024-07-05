import { Component, computed, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import {map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-necessity-index',
  standalone: true,
  imports: [ExpenseItemComponent,AsyncPipe],
  templateUrl: './necessity-index.component.html',
  styleUrl: './necessity-index.component.css',
})
export class NecessityIndexComponent {
  expensesService = inject(ExpensesService);
  expenses$ = this.expensesService.expenses$;
  necessaryExpenses$ = this.expenses$.pipe(
    map((expenses) => expenses.filter((expense) => expense.necessary == true))
  );
  unnecessaryExpenses$ = this.expenses$.pipe(
    map((expenses) => expenses.filter((expense) => expense.necessary == false))
  );

  deleteExpense(expenseId: string | number) {
    this.expensesService.deleteExpenseAction$.next(expenseId);
  }
  updateExpense(updatedExpense: Expense) {
    this.expensesService.updateExpenseAction$.next(updatedExpense);
  }
}
