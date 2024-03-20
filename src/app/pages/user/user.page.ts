import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public spiderPhoto: string = 'https://cdn.pixabay.com/photo/2023/07/30/13/07/spiderman-8158916_1280.png';
  private defaultPhot: string = 'https://ionicframework.com/docs/img/demos/avatar.svg'; 

  constructor() { }

  ngOnInit() {
  }

}
