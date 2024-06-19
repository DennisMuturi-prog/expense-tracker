import { Component, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseItemComponent,AddExpenseComponent,HeaderComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  expensesService=inject(ExpensesService)
  showAddExpense:boolean=false
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
  deleteExpense(expenseId:string | number){
    this.expensesService.deleteExpense(expenseId).subscribe((res)=>{
      console.log(res)
      this.expenses=this.expenses.filter(expense=>expense.id!==res.id)
    })
  }
  toggleAddExpense(newShow:boolean){
    this.showAddExpense=newShow
  }
  updateExpense(updatedExpense:Expense){
    this.expensesService.updateExpense(updatedExpense).subscribe((res)=>{
      this.expenses.map((expense)=>{
        if(res.id==expense.id){
          return res;
        }
        else{
          return expense
        }
      })
    })
  }
}
