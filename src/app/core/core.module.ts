import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { AdsBannerComponent } from './components/ads-banner/ads-banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [NavbarComponent, AdsBannerComponent, CategoriesComponent, ProductsComponent],
  imports: [CommonModule, CarouselModule, AvatarModule],
  exports: [NavbarComponent, AdsBannerComponent, CategoriesComponent, ProductsComponent],
})
export class CoreModule {}
