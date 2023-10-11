import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProfiloComponent } from './profilo/profilo.component';

const routes: Routes = [
    /* { path: '/', component: ProductListComponent },
    { path: 'product/detail', component: ProductDetailComponent }, */
  { path: 'home', component: HomeComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }