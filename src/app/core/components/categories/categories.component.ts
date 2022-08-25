import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/http/index.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  cats = [
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
    {
      image: '../../../../assets//Businessman-Transparent.png',
      title: 'ازياء رجالي',
    },
  ];
  constructor(private http: IndexService) {}

  ngOnInit(): void {
    // this.http.getCategories().subscribe((data) => {
    //   console.log(data); //! There is no data with this endpoint (404)
    // });
  }
}
