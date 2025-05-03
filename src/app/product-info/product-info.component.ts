import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  selectedProduct: any;

  constructor(private sharedService: SharedService, 
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params.id;
    let featuredProducts = this.sharedService.getFeaturedProducts();
    this.selectedProduct = featuredProducts.filter((item: any) => { 
      if(item.id === Number(productId)) { 
        return item; 
      } 
    });
  }

  onClickOfBack() {
    this.sharedService.setSelectedCategory('featured');
    this.route.navigate(['']);
  }

}
