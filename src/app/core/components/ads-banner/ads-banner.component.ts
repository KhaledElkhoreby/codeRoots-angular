import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Slider } from '../../interfaces/ads-interface';
import { IndexService } from '../../services/http/index.service';
@Component({
  selector: 'app-ads-banner',
  templateUrl: './ads-banner.component.html',
  styleUrls: ['./ads-banner.component.css'],
})
export class AdsBannerComponent implements OnInit {
  ads: Slider[] = [];
  baseUrl: string;
  constructor(private http: IndexService) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit(): void {
    this.http.getMainSlider().subscribe((ads) => {
      console.log(ads);
      ads.forEach((ad) =>
        ad.AdsSpacesprice.forEach((slide) => this.ads.push(slide.sliders))
      );
      console.log(this.ads);
    });
  }
}
