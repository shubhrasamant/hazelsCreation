import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  featuredData: any = [];
  allProductsData: any;
  singlePageProducts = [];
  
  constructor(private http: HttpClient, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/featured.json').subscribe((response) => {
      this.featuredData = response;
      this.allProductsData = response;
      this.allProductsData = this.allProductsData.reverse();
      this.singlePageProducts = this.allProductsData.slice(0, 9);
      this.sharedService.setFeaturedProducts(this.featuredData);
    }, error => {
      console.log("Came in to error", error);
    });
   
    this.sharedService.categorySubject.subscribe(category => {
      if(category === 'featured') {
        this.allProductsData = this.featuredData;
      } else {
        this.singlePageProducts = [];
        this.allProductsData = this.featuredData.filter((item: any) => { 
          if(item.category.split(',').indexOf(category) !== -1) { 
            return item; 
          } 
        });
      }
      this.singlePageProducts = this.allProductsData.slice(0, 9);
    });
  }

  // On Change of Page
  onChangePage(pageOfItems: Array<any>) {
    this.singlePageProducts = pageOfItems;
    window.scroll(0, 0);
  }

}
