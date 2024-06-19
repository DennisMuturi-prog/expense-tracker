import { Component, inject ,AfterViewInit, ViewChild} from '@angular/core';
import { ExpensesService } from '../../services/expenses-service.service';
import { Expense } from '../../Types/ExpenseType';
import {MatTableModule,MatTableDataSource} from '@angular/material/table'
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-total-cost',
  standalone: true,
  imports: [MatTableModule,MatSortModule,DatePipe],
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.css'
})
export class TotalCostComponent  implements AfterViewInit{
  expensesService=inject(ExpensesService);
  expenses:Expense[]=[]
  totalcost:number=0
  columnsToDisplay:string[]=['id','expenseDescription','dateIncurred','necessary','amount']
  dataSource=new MatTableDataSource(this.expenses)
  @ViewChild(MatSort) sort!:MatSort;
  ngAfterViewInit(): void {
    this.dataSource.sort=this.sort
  }
  ngOnInit():void{
    this.expensesService.getExpenses().subscribe((res)=>{
      this.expenses=res;
      this.expenses.map((expense)=>{
        return {...expense,dateIncurred:new Date(expense.dateIncurred)}
      })
      this.dataSource.data=this.expenses
      this.totalcost=res.reduce((total,currentValue)=>(total+currentValue.amount),0)
    })

  }
}
