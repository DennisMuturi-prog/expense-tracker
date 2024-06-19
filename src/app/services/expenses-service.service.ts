import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../Types/ExpenseType';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  http=inject(HttpClient)
  constructor() { }
  getExpenses():Observable<Expense[]>{
    return this.http.get<Expense[]>('http://localhost:3000/expenses')
  }
  addExpense(newExpense:Expense):Observable<Expense>{
    return this.http.post<Expense>('http://localhost:3000/expenses',newExpense)
  }
  deleteExpense(expenseId:string | number):Observable<Expense>{
    return this.http.delete<Expense>(`http://localhost:3000/expenses/${expenseId}`)
  }
  updateExpense(newExpense:Expense):Observable<Expense>{
    return this.http.put<Expense>(`http://localhost:3000/expenses/${newExpense.id}`,newExpense)
  }
}