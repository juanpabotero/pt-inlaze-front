import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue = '';

  constructor(private readonly router: Router) {}

  onSubmit(): void {
    if (!this.searchValue) return;
    const searchValue = this.searchValue.trim().toLocaleLowerCase();
    this.router.navigate(['/drinks/name', searchValue]);
    this.searchValue = '';
  }
}
