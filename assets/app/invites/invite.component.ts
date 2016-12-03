import { Component, OnInit, Input } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { ErrorService } from "../errors/error.service";
import { Router } from '@angular/router';

import {Rest} from "../rest/rest"
import {RestService} from "../rest/rest.service"
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
        <li (click)="selectFriend(friend)">
            <span> Name: {{friend.firstName}}</span>
        </li>
      </ul>
    </div>

    <div style="border:1px solid">
      <h4> Current invites In DB</h4>
      <ul *ngFor="let invite of invites">
        <li>
            <span> UserID: {{invite.userId}}</span>
            <span> FriendID: {{invite.friendId}}</span>
            <span> RestName: {{invite.restName}}</span>
            <span> RestAddress: {{invite.restAddress}}</span>
            <span> Time And Date: {{invite.timeAndDate}}</span>
            <button (click)="delete(invite._id, invite)">Delete</button>
        </li>
      </ul>
    </div>

    <div *ngIf="selectedFriend">
      <p>Date: <input type="date" #Date></p>
      <p>Time: <input type = "time" #Time></p>
      <button (click)="createInvite(Date.value, Time.value)">
        Send Invite
      </button>
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
    private friendService:FriendService,
    private restService:RestService
  ) { }

  friends: Friend[];
  selectedFriend: Friend;
  selectedRest:Rest;
  invites: Invite[];

  ngOnInit(){
    this.getFriends();

    this.inviteService.get(localStorage.getItem('userId'))
    .subscribe(
      invites => this.invites = invites,
      error => this._errorService = <any>error
     );

    this.restService.getSingleRest(localStorage.getItem('restID'))
      .subscribe(
        selectedRest => this.selectedRest = selectedRest,
        error => this._errorService = <any>error
      );
  }

  selectFriend(friend: Friend){
    this.selectedFriend = friend;
  }

  createInvite(date:String, time:String)
  {
    console.log(this.selectedRest);
    const timeAndDate = date+" "+time;
    const invite = new Invite(localStorage.getItem('userId'), this.selectedFriend.userId, this.selectedRest.name, this.selectedRest.address, timeAndDate);
    this.inviteService.create(invite)
      .subscribe(
          data =>
          {
            console.log(data)
            if(data.message == "Success")
            {
              this.invites.push(invite);
            }
          },
          error => this._errorService.handleError(error)
      )
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

  delete(id: String, invite: Invite):void
  {
    this.inviteService.delete(id)
      .subscribe(
        data =>
        {
          console.log(data)
          if(data.message == "Success")
          {
            this.invites.splice(this.invites.indexOf(invite), 1);
          }
        },
        error => this._errorService.handleError(error)
      )
  }

  isLoggedIn() {
        return this._authService.isLoggedIn();
  }
}
