import { Injectable } from '@angular/core';
import { Users$ } from '../DataBase/users.database';
import { IUsers } from '../interfaces/users.interface';
import { combineLatest, filter, map, Observable, startWith, Subject, switchMap, tap } from 'rxjs';

@Injectable()
export class UsersService {

  protected users: IUsers[] = this.getUsers()

  public filterInputStatus: string[] = [...new Set(this.users.map(value => value.status))]
  public filterInputRoles: string[] = [...new Set(this.users.map(value => value.roles))]
  private checkFilter$: Subject<void> = new Subject<void>();

  private filter: any = {
    login: '',
    email: '',
    phoneNumber: '',
    role: '',
    createDate: Date,
    editDate: Date,
    status: ''
  }

  protected getUsers(): IUsers[] {
    let arrUsers!: IUsers[]
    Users$.subscribe(value => arrUsers = value)
    return arrUsers
  }

  public getUsers$(): Observable<any> {
     return combineLatest([
       Users$,
       this.checkFilter$
         .pipe(startWith(null))
     ])
       .pipe(
         map(([list, sub]: [IUsers[], void | null]) => {
           return list.filter((user: IUsers) => !this.filter.login || user.login.includes(this.filter.login))
         }),
       );
  }

  public setFilterUsers(DataFilter: any): void {
      if(DataFilter.login){
        this.filter.login = DataFilter.login;
      }

      this.checkFilter$.next();
  }
}
