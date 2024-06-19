import { Component, Output,EventEmitter, Input } from '@angular/core';
import { Expense } from '../../Types/ExpenseType';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  @Input() functionality:string='add'
  @Input() startingData:Expense={
    amount:0,
    dateIncurred:'',
    expenseDescription:'',
    necessary:false
  }
  @Output() addExpenseEvent=new EventEmitter<Expense>()
  @Output() editExpenseEvent=new EventEmitter<Expense>()
  newExpense!:Expense
    ngOnInit():void{
      this.newExpense=this.startingData
    }
  addExpense(myForm:NgForm){
    this.addExpenseEvent.emit(this.newExpense)
    myForm.resetForm()
  }
   updateExpense(){
    this.editExpenseEvent.emit(this.newExpense)
  }
}
