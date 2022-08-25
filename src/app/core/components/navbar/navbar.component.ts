import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  show = false;
  catgories = [
    'موبايلات وصلت جديد',
    'كل الموبايلات',
    'كل اجهزة التابلت',
    'ساعات سمارت و إكسسوارات',
    'سماعات أذن لاسلكية',
    'سماعات أذن',
    'الباور بانك',
    'الشواحن و كابلات',
    'حوامل الموبايلات وسلفي ستيك',
    'جرابات و لاصقات حماية الشاشة',
    'إكسسوارت ألعاب الموبايل و الواقع الافتراضي',
  ];
  brands = [
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-03.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-02.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-01.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-05.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-04.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-09.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-08.png',
    'https://z.nooncdn.com/cms/pages/20210410/2a23ead9569718f23f16e78305f07230/drop-brand-07.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
