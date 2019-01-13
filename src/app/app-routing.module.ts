import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
	{
		path: 'products', component: ProductsComponent
	}, {
		path: 'list', component: ListComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, ListComponent];
