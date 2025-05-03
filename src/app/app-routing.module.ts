import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'product/:id', component: ProductInfoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
