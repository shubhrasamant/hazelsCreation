import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  featuredProducts: any = [];
  selectedCategory: string = '';
  public categorySubject = new BehaviorSubject('');

  constructor() { }

  getFeaturedProducts() {
    return this.featuredProducts;
  }

  setFeaturedProducts(products: any) {
    this.featuredProducts = products;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  setSelectedCategory(category: any) {
    this.selectedCategory = category;
  }

}
