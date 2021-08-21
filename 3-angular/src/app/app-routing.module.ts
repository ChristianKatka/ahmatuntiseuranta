import { NgModule } from '@angular/core';
import { AuthenticatedGuard } from '@auth/guards';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home/home.container';
import { AppInitializationContainerComponent } from './app-initialization/app-initialization.container';
import { ProductContainerComponent } from './products';
import { AddProductContainerComponent } from './add-product';
import { FullCollectionContainerComponent } from './full-collection/full-collection.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    component: HomeContainerComponent,
  },
  {
    path: 'initializing',
    canActivate: [AuthenticatedGuard],
    pathMatch: 'full',
    component: AppInitializationContainerComponent,
  },
  {
    path: 'full-collection',
    canActivate: [AuthenticatedGuard],
    pathMatch: 'full',
    component: FullCollectionContainerComponent,
  },
  {
    path: 'sales/:productId',
    canActivate: [AuthenticatedGuard],
    component: ProductContainerComponent,
  },
  {
    path: 'add-product',
    canActivate: [AuthenticatedGuard],
    component: AddProductContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
