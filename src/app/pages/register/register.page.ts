import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserDTO } from 'src/app/core/dtos/UserDTO';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public user: UserDTO = new UserDTO();

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
    private alertService: AlertService,
    public utilsService: UtilsService,
    private service: UserService
  ) { }

  ngOnInit() {
    this.user = new UserDTO();
  }

  modifyPasswordPropertie() {
    let index = this.passwordPropertie ===  this.passwordProperties[0] ? 1 : 0;
    this.passwordPropertie = this.passwordProperties[index];
  }

   submit() {
    this.service.saveUser(this.user).subscribe({
      next: (response: UserDTO) => {
       this.showAlert(
        'Sucesso',
        'Seu usuário foi cadastrado com sucesso! Aproveite o aplicativo!',
        [
          {
            text: 'Ok',
            role: 'confirm',
            handler: () => {
              this.utilsService.redirect('login')
            }
          }
        ]
       );
      }, error: () => {
        this.showAlert(
          'Atenção',
          'Não foi possível cadastrar seu usuário nesse instante! Por favor, tenten novamente mais tarde!',
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

  private showAlert(header: string = '', subtHeader: string = '', buttons: Array<any> = []): void {
    this.alertService.showAlertWithSubHeader(
      header, subtHeader, buttons
    )
  }

  public get disableSubmit(): boolean {
    return !this.user || !this.user.name || !this.user.password || !this.user.name;
  }

}
