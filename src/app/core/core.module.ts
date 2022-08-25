import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { AdsBannerComponent } from './components/ads-banner/ads-banner.component';

@NgModule({
  declarations: [NavbarComponent, AdsBannerComponent],
  imports: [CommonModule, CarouselModule],
  exports: [NavbarComponent, AdsBannerComponent],
})
export class CoreModule {}
