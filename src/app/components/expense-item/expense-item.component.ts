import { Component,Input } from '@angular/core';
import { Expense } from '../../Types/ExpenseType';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css'
})
export class ExpenseItemComponent {
  @Input() expense!:Expense
}
