import { Component, inject } from '@angular/core';
import { IUsers } from '../../interfaces/users.interface';
import { Users$ } from '../../DataBase/users.database';
import { Observable } from 'rxjs';
import { UsersService } from "../../services/users.service";


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  public users$: Observable<IUsers[]> = inject(UsersService).getUsers$()
}
