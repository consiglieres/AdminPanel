import { Injectable } from '@angular/core';
import { Users$ } from '../DataBase/users.database';
import { IUsers } from '../interfaces/users.interface';
import { filter } from 'rxjs';

@Injectable()
export class UsersService { 
  protected users: IUsers[] = this.getUsers()

  public filterInputStatus: string[] = [...new Set(this.users.map(value => value.status))]
  public filterInputRoles: string[] = [...new Set(this.users.map(value => value.roles))]

  protected getUsers(): IUsers[] {
    let arrUsers!: IUsers[]
    Users$.subscribe(value => arrUsers = value)
    return arrUsers
  }

  public filterUsers(login: string, email: string, phoneNumber: string, 
    role: string, createDate: string, editDate: string, status: string): void {
      if(login !== ""){
        Users$ = Users$.pipe(filter(value => value === login))
      }
  }
}