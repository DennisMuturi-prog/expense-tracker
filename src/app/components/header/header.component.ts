import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleAddExpenseEvent=new EventEmitter<boolean>()
  showAddExpense:boolean=false
  toggleAddExpense(){
    this.showAddExpense=!this.showAddExpense
    this.toggleAddExpenseEvent.emit(this.showAddExpense)
  }
}
