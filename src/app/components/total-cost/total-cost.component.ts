import { Component, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-total-cost',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.css'
})
export class TotalCostComponent {
  expensesService=inject(ExpensesService);
  expenses:Expense[]=[]
  totalcost:number=0
  columnsToDisplay:string[]=['id','expenseDescription','dateIncurred','amount','necessary']
  ngOnInit():void{
    this.expensesService.getExpenses().subscribe((res)=>{
      console.log(typeof(res[3].amount))
      this.expenses=res;
      this.totalcost=res.reduce((total,currentValue)=>(total+currentValue.amount),0)
    })

  }
}
