import { Component } from '@angular/core';
import { ExpenseList } from './expense-list/expense-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExpenseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
