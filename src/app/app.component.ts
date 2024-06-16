import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker';
}
