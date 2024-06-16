import { Component, Output,EventEmitter } from '@angular/core';
import { Expense } from '../../Types/ExpenseType';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  @Output() addExpenseEvent=new EventEmitter<Expense>()
  newExpense:Expense={
    amount:0,
    dateIncurred:'',
    expenseDescription:'',
    necessary:false
  }
  addExpense(){
    this.addExpenseEvent.emit(this.newExpense)
  }
}
