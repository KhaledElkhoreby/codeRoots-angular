import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IndexService } from '../../services/http/index.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  baseUrl: string;
  products: any[] = [];
  constructor(private http: IndexService) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit(): void {
    this.http.getProducts().subscribe((data) => {
      this.products = Object.values(data);
    });
  }
}
