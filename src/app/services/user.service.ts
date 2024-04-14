import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../core/dtos/UserDTO';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  private readonly USER_PATH: string = '/user';

  public findByLoginAndPassword(login: string = '', password: string = ''): Observable<UserDTO> {
    return this.find(this.USER_PATH, { login: login, password: password });
  }

  public saveUser(userDTO: UserDTO): Observable<UserDTO> {
    return this.save(this.USER_PATH, userDTO);
  }
}
