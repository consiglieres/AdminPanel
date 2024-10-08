import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrl: './filter-users.component.css',
})

export class FilterUsersComponent {
  public filterInputRoles: string[] = inject(UsersService).filterInputRoles
  public filterInputStatus: string[] = inject(UsersService).filterInputStatus
  
  public formFilter: FormGroup = new FormGroup ({
    login: new FormControl<string>('', {nonNullable: true}),
    email: new FormControl<string>('', {nonNullable: true}),
    phoneNumber: new FormControl<string>('', {nonNullable: true}),
    role:  new FormControl<string>('', {nonNullable: true}),
    createDate:  new FormControl<string>('', {nonNullable: true}),
    editDate:  new FormControl<string>('', {nonNullable: true}),
    status:  new FormControl<string>('', {nonNullable: true}),
  })

  constructor(private _userService: UsersService){}

  public confirmFilter(): void {
    const DataFilter = {
      login: this.formFilter.controls['login'].value,
      email: this.formFilter.controls['email'].value,
      phoneNumber: this.formFilter.controls['phoneNumber'].value,
      role: this.formFilter.controls['role'].value,
      createDate: this.formFilter.controls['createDate'].value,
      editDate: this.formFilter.controls['editDate'].value,
      status: this.formFilter.controls['status'].value,
    }
    console.log(DataFilter)

    this._userService.filterUsers(DataFilter.login, DataFilter.email, 
      DataFilter.phoneNumber, DataFilter.role, DataFilter.createDate, 
      DataFilter.editDate, DataFilter.status)
  }
}
