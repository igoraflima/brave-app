import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public passwordProperties = [
    {
      type: 'password',
      icon: 'eye-off',
      placeholder: '.....'
    },
    {
      type: 'text',
      icon: 'eye',
      placeholder: '12345'
    }
  ];

  public passwordPropertie = this.passwordProperties[0];

  constructor(
    public utilsService: UtilsService
  ) { }

  ngOnInit() {}

  modifyPasswordPropertie() {
    let index = this.passwordPropertie ===  this.passwordProperties[0] ? 1 : 0;
    this.passwordPropertie = this.passwordProperties[index];
  }
}
