import { Component, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { HeaderComponent } from '../header/header.component';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseItemComponent,AddExpenseComponent,HeaderComponent,AsyncPipe],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  expensesService=inject(ExpensesService)
  showAddExpense:boolean=false
  expenses$=this.expensesService.expenses$
 
  addExpense(newExpense:Expense){
    this.expensesService.addExpenseAction$.next(newExpense)
  }
  deleteExpense(expenseId:string | number){
    this.expensesService.deleteExpenseAction$.next(expenseId)
  }
  toggleAddExpense(newShow:boolean){
    this.showAddExpense=newShow
  }
  updateExpense(updatedExpense:Expense){
    this.expensesService.updateExpenseAction$.next(updatedExpense)
  }
}
