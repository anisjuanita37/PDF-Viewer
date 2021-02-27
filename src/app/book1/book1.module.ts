import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Book1Page } from './book1.page';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
const routes: Routes = [
  {
    path: '',
    component: Book1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxExtendedPdfViewerModule
  ],
  declarations: [Book1Page]
})
export class Book1PageModule {}
