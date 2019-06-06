import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  acercade: string ="https://cdn.shopify.com/s/files/1/0671/0175/files/equipo-masculino-de-negocios_large.png?5417085131036973095";
  constructor() { }

  ngOnInit() {
  }

}
