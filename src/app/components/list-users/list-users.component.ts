import { Component } from '@angular/core';
import { IUsers } from '../../interfaces/users.interface';
import { Users$ } from '../../DataBase/users.database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  public users$: Observable<IUsers[]> = Users$



}
