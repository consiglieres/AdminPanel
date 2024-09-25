import { Injectable } from '@angular/core';
import { IUsers } from '../interfaces/users.interface';
import { Users$ } from '../DataBase/users.database';
import { filter } from 'rxjs';

@Injectable()
export class UsersService {
  protected users: IUsers[] = this.getUsers()
  public filtersUsers!: IUsers[]

  public filterInputRoles: string[] = [...new Set(this.users.map(m => m.roles))] 
  public filterInputStatus: string[] = [...new Set(this.users.map(m => m.status))]

  protected getUsers(): IUsers[]{
    let arrUsers!: IUsers[]
    Users$.subscribe(value => arrUsers = value)
    return arrUsers
  }

  public filterUsers(login: string, email: string, phoneNumber: string, 
    role: string, createDate: string, editDate: string, status: string): void {
    if(login !== ""){
      this.filtersUsers = this.users.filter(value => value.login.includes(login))
    }
    else{
      this.filtersUsers = this.users
    }
  }
}