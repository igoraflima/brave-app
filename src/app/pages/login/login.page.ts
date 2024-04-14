import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { UserDTO } from 'src/app/core/dtos/UserDTO';
import { GenderEnum } from 'src/app/core/enums/GenderEnum';
import { BaseService } from 'src/app/services/base/base.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';

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
  public login?: string;
  public password?: string;

  constructor(
    private alertService: AlertService,
    public utilsService: UtilsService,
    private service: UserService,

  ) { }

  ngOnInit() {}

  modifyPasswordPropertie() {
    let index = this.passwordPropertie ===  this.passwordProperties[0] ? 1 : 0;
    this.passwordPropertie = this.passwordProperties[index];
  }

  submit() {
    this.service.findByLoginAndPassword(this.login, this.password).subscribe({
      next: (response: UserDTO) => {
        this.alertService.showAlert(
          'Seja bem vindo!',
          [
            {
              text: 'Ok',
              role: 'confirm',
              handler: () => {
                this.utilsService.redirect('home')
              }
            }
          ]
        )
      }, error: (error: HttpErrorResponse) => {
        let subHeader = (error.status === 404 ? 
        'Nenhum usuário encontrado com o login e senha informado.' : 
        'Não foi possível fazer login nesse instante.') +
        'Por favor, tente novamente mais tarde!'; 

        this.alertService.showAlertWithSubHeader(
          'Atenção!',
          subHeader,
          [
            {
              text: 'Ok',
              role: 'cancel'
            }
          ]
        );
      }
    })

  }

  public get disableButton(): boolean {
    return !this.login || !this.password;
  }
}
