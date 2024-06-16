import { Component, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseItemComponent,AddExpenseComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  expensesService=inject(ExpensesService)
  newOne!:Expense
  expenses!:Expense[]
  ngOnInit():void{
    this.expensesService.getExpenses().subscribe((res)=>{
      this.expenses=res
    })
  }
  addExpense(newExpense:Expense){
    this.expensesService.addExpense(newExpense).subscribe((res)=>{
      this.expenses.push(res)
    })

  }
}
