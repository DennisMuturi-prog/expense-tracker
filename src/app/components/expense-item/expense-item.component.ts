import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Expense } from '../../Types/ExpenseType';
import { NgClass } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [NgClass,MatIconModule,AddExpenseComponent],
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css'
})
export class ExpenseItemComponent {
  @Input() expense!:Expense
  @Output() deleteExpenseEvent=new EventEmitter<string | number>();
  @Output() updateExpenseEvent=new EventEmitter<Expense>();
  showEditExpense:boolean=false
  onDeleteExpense(){
    this.deleteExpenseEvent.emit(this.expense.id)
  }
  onToggleEdit(){
    this.showEditExpense=!this.showEditExpense
  }
  editExpense(updatedExpense:Expense){
    this.updateExpenseEvent.emit(updatedExpense)
    this.onToggleEdit()
  }
}
