import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
 


})
export class UserComponent implements OnInit {

  public users = [];

  constructor(private _userlistService: UserlistService) { }

  ngOnInit() {
    this.users = this._userlistService.getUsers();
  }

}
