import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './list/list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
	{
		path: '', redirectTo: '/products', pathMatch: 'full'
	}, {
	
		path: 'products', component: ProductsComponent
	},
{
	
		path: 'products/:id', component: ProductDetailsComponent
	},

	 {
		path: 'list', component: ListComponent
	},
	{
		path: '**', component: PageNotFoundComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, ListComponent,ProductDetailsComponent, PageNotFoundComponent];
