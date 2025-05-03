import { Component, OnInit } from '@angular/core';
import { SharedService } from  '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  selectedCategory: string = '';

  constructor(private sharedService: SharedService, private route: Router) { }

  ngOnInit(): void {
    if(this.sharedService.getSelectedCategory().length === 0) {
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
    setTimeout(()=>{
      this.sharedService.categorySubject.next(category);
    }, 50); 
  }
}
