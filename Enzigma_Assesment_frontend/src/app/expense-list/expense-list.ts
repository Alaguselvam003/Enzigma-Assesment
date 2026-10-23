import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expenses: Expense[] = [
    { id: 1, title: 'Food', amount: 500, category: 'Food' },
    { id: 2, title: 'Travel', amount: 300, category: 'Travel' },
    { id: 3, title: 'Shopping', amount: 400, category: 'Shopping' }
  ];

  selectedCategory = 'All Category';

  get filteredExpenses(): Expense[] {
    if (this.selectedCategory === 'All Category') {
      return this.expenses;
    }

    return this.expenses.filter(
      expense => expense.category === this.selectedCategory
    );
  }

  get totalExpense(): number {
    return this.filteredExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }
}
