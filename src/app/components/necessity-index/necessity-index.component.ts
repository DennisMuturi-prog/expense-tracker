import { Component, computed, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-necessity-index',
  standalone: true,
  imports: [ExpenseItemComponent],
  templateUrl: './necessity-index.component.html',
  styleUrl: './necessity-index.component.css',
})
export class NecessityIndexComponent {
  expensesService = inject(ExpensesService);
  allExpenses = signal<Expense[]>([]);
  necessaryExpenses = computed(() =>
    this.allExpenses().filter((expense) => expense.necessary == true)
  );
  unnecessaryExpenses = computed(() =>
    this.allExpenses().filter((expense) => expense.necessary == false)
  );
  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((res) => {
      this.allExpenses.set(res);
    });
  }
  deleteExpense(expenseId: string | number) {
    this.expensesService.deleteExpense(expenseId).subscribe((res) => {
      this.allExpenses.update(previous=>previous.filter(expense=>expense.id!==expenseId))
    });
  }
  updateExpense(updatedExpense: Expense) {
    this.expensesService.updateExpense(updatedExpense).subscribe((res) => {
      this.allExpenses.update(previous=>previous.map(expense=>{
        if(expense.id==res.id){
          return res
        }
        else{
          return expense
        }
      }))

    }
      );
  }
}
