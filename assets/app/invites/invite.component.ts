import { Component, OnInit, Input } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { ErrorService } from "../errors/error.service";
import { Router } from '@angular/router';

import {FriendService} from "./../friends/friend.service";
import {Friend} from "./../friends/friend";
import {Invite} from "./invite";
import {AuthService} from "./../auth/auth.service";
import {InviteService} from "./invite.service";

@Component({
  selector: "my-rests",
  template: `
  <div *ngIf="isLoggedIn()">

    <h1> Select A Friend To Go With </h1>

    <div style="border:1px solid">
      <h4> Current Friends </h4>
      <ul *ngFor="let friend of friends">
        <li>
            <span> Name: {{friend.firstName}}</span>
        </li>
      </ul>
    </div>

  </div>
  `,
})

export class InviteComponent implements OnInit{
  constructor(
    private router: Router,
    private _authService: AuthService,
    private inviteService: InviteService,
    private _errorService: ErrorService,
    private friendService:FriendService
  ) { }

  friends: Friend[];

  ngOnInit(){
    this.getFriends();
  }

  getFriends(){
    this.friendService.getFriends()
        .subscribe(
            friends => {
                this.friends = friends;
                this.friendService.friends = friends;
            },
            error => this._errorService.handleError(error)
        );
  }

  isLoggedIn() {
        return this._authService.isLoggedIn();
  }
}
