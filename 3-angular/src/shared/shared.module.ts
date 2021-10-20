import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertComponent } from './components/info-boxes/alert.component';
import { InfoComponent } from './components/info-boxes/info.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { BooleanPipe } from './pipes/boolean.pipe';
import { BackArrowContainerComponent } from './components/back-arrow/back-arrow.container';
import { IconPipe } from './pipes/icon-type.pipe';

import { TrunctateTextComponent } from './components/trunctate-text/trunctate-text.component';
import { ContentContainerComponent } from './components/navbar/content.container';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/navbar/sidenav.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { BackButtonContainerComponent } from './components/back-button/back-button.container';
import {
  DeleteProductDialogComponent,
  DeleteProductDialogConfirmComponent,
} from './components/delete-product-dialog/delete-product-dialog.component';
import {
  ViewImageComponent,
  ViewImageDialogComponent,
} from './components/image-dialog/view-image.component';
import { AddFilesComponent } from './components/add-files/add-files.component';
import { FileSelectDirective } from './components/add-files/file-select.directive';
import { DeleteJobDialogComponent, DeleteJobDialogConfirmComponent } from './components/delete-job-dialog/delete-job-dialog.component';
import { DeleteDestinationDialogComponent, DeleteDestinationDialogConfirmComponent } from './components/delete-destination-dialog/delete-destination-dialog.component';

const components = [
  AlertComponent,
  InfoComponent,
  LogoComponent,
  BackArrowContainerComponent,
  TrunctateTextComponent,
  ContentContainerComponent,
  NavbarComponent,
  SidenavComponent,
  LoadingSpinnerComponent,
  BackButtonContainerComponent,
  DeleteProductDialogComponent,
  DeleteProductDialogConfirmComponent,
  ViewImageComponent,
  ViewImageDialogComponent,
  AddFilesComponent,
  FileSelectDirective,
  DeleteJobDialogComponent,
  DeleteJobDialogConfirmComponent,
  DeleteDestinationDialogComponent,
  DeleteDestinationDialogConfirmComponent
];

const pipes = [BooleanPipe, IconPipe];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}
