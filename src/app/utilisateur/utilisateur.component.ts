import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../service/user.service';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private router: Router, public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();

    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers()
                .subscribe(
                  users => {
                  console.log(users);
                  this.users = users
                  }
                );
  }

}