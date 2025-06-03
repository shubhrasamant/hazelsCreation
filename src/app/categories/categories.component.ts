import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  selectedCategory: string = '';
  dropdownOpen = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation(); // Prevent other click handlers
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Optional: close dropdown when clicking outside
  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }

  constructor(private sharedService: SharedService, private route: Router) { }

  ngOnInit(): void {
    if (this.sharedService.getSelectedCategory().length === 0) {
      this.selectedCategory = 'featured';
      this.sharedService.setSelectedCategory(this.selectedCategory);
      this.sharedService.categorySubject.next(this.selectedCategory);
    } else {
      this.selectedCategory = this.sharedService.getSelectedCategory();
    }
  }

  onClickCategory(category: string) {
    this.selectedCategory = category;
    this.sharedService.setSelectedCategory(this.selectedCategory);
    this.route.navigate(['']);
    setTimeout(() => {
      this.sharedService.categorySubject.next(category);
    }, 50);
  }
}
