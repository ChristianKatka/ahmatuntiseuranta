import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthHTTPService } from './services/auth-http.service';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer } from './store/router-state.serializer';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { environment } from '../environments/environment';

import { MaterialModule } from '../material.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from '@auth/auth.module';

import { HomeContainerComponent } from './home/home.container';
import { AppInitializationContainerComponent } from './app-initialization/app-initialization.container';

import {
  ProductComponent,
  ProductsComponent,
  ProductsContainerComponent,
  ProductContainerComponent,
  ProductEditFormComponent,
} from './products';
import {
  AddProductComponent,
  AddProductContainerComponent,
  AddProductFormComponent,
} from './add-product';
import { FullCollectionContainerComponent } from './full-collection/full-collection.container';
import { FullCollectionComponent } from './full-collection/full-collection.component';
import { AddJobBottomSheetContainerComponent } from './products/product/add-job-bottom-sheet/add-job-bottom-sheet.container';
import { AddJobFormComponent } from './products/product/add-job-bottom-sheet/add-job-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ListJobsContainerComponent } from './products/product/list-jobs/list-jobs.container';
import { ListJobsComponent } from './products/product/list-jobs/list-jobs.component';
import { JobBottomSheetContainerComponent } from './products/product/job-bottom-sheet/job-bottom-sheet.container';
import { JobComponent } from './products/product/job-bottom-sheet/job.component';
import { JobEditFormComponent } from './products/product/job-bottom-sheet/job-edit-form.component';

const components: any[] = [
  AppComponent,
  HomeContainerComponent,
  ProductComponent,
  ProductsComponent,
  ProductsContainerComponent,
  ProductContainerComponent,
  AppInitializationContainerComponent,
  AddProductComponent,
  AddProductContainerComponent,
  AddProductFormComponent,
  ProductEditFormComponent,
  FullCollectionContainerComponent,
  FullCollectionComponent,
  AddJobBottomSheetContainerComponent,
  AddJobFormComponent,
  ListJobsContainerComponent,
  ListJobsComponent,
  JobBottomSheetContainerComponent,
  JobComponent,
  JobEditFormComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: RouterStateSerializer,
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
    SharedModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [AuthHTTPService],
  bootstrap: [AppComponent],
})
export class AppModule {}
