import { HttpClient } from '@angular/common/http';
import { Injectable, inject,signal } from '@angular/core';
import { Observable, Subject, map, merge,scan, shareReplay, switchMap} from 'rxjs';
import { Expense} from '../Types/ExpenseType';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  http = inject(HttpClient);
  deleteExpenseAction$ = new Subject<number | string>();
  updateExpenseAction$ = new Subject<Expense>();
  addExpenseAction$ = new Subject<Expense>();
  deleteExpense$ = this.deleteExpenseAction$.pipe(
    switchMap((id) => this.deleteExpense(id))
  );
  updateExpense$ = this.updateExpenseAction$.pipe(
    switchMap((expense) => this.updateExpense(expense))
  );
  addExpense$ = this.addExpenseAction$.pipe(
    switchMap((expense) => this.addExpense(expense))
  );
  deleteHandler(expense: Expense) {
    return (state: Expense[]) => [
      ...state.filter((expenseitem) => expenseitem.id !== expense.id),
    ];
  }
  updateHandler(expense: Expense) {
    return (state: Expense[]) => [
      ...state.map((expenseitem) => expenseitem.id==expense.id?expense:expenseitem),
    ];
  }
  addHandler(expense: Expense) {
    return (state: Expense[]) => [...state, expense];
  }
  firstExpensesHandler(expenses: Expense[]) {
    return (state: Expense[]) => [...state, ...expenses];
  }
  firstexpenses$ = this.getExpenses();
  expenses$=merge(
    this.firstexpenses$.pipe(map(this.firstExpensesHandler)),
    this.deleteExpense$.pipe(map(this.deleteHandler)),
    this.addExpense$.pipe(map(this.addHandler)),
    this.updateExpense$.pipe(map(this.updateHandler))
  ).pipe(
    scan(
      (state:Expense[],stateHandler)=>stateHandler(state),
      []
    ),
    shareReplay(1)
  )
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:3000/expenses');
  }
  addExpense(newExpense: Expense): Observable<Expense> {
    return this.http.post<Expense>(
      'http://localhost:3000/expenses',
      newExpense
    );
  }
  deleteExpense(expenseId: number | string): Observable<Expense> {
    return this.http.delete<Expense>(
      `http://localhost:3000/expenses/${expenseId}`
    );
  }
  updateExpense(newExpense: Expense): Observable<Expense> {
    return this.http.put<Expense>(
      `http://localhost:3000/expenses/${newExpense.id}`,
      newExpense
    );
  }
  constructor() {}
}