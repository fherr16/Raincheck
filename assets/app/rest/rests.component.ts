import { Component, OnInit, Input } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { ErrorService } from "../errors/error.service";
import { Router } from '@angular/router';

import {Rest} from "./rest";
import {AuthService} from "./../auth/auth.service";
import {RestService} from "./rest.service";

@Component({
  selector: "my-rests",
  template: `
  <div *ngIf="isLoggedIn()">

    <h1> My Restaurants </h1>
    <div>
      <label> Name: </label><input #restName />
      <label> Address: </label><input #restAddress />
      <label> Rating: </label><input #restRating />
      <button (click)="add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null">
        Add
      </button>
    </div>

    <div style="border:1px solid">
      <h4> Current Restaurants In DB</h4>
      <ul *ngFor="let rest of rests">
        <li>
            <span> Name: {{rest.name}}</span>
            <span> Address: {{rest.address}}</span>
            <span> Rating: {{rest.rating}}</span>
            <button (click)="delete(rest._id, rest)">Delete</button>
            </li>
      </ul>
    </div>

    <div style="border:1px solid">
      <h4> User Rests</h4>
      <ul *ngFor="let rest of userRests">
        <li>
            <span> Name: {{rest.name}}</span>
            <span> Address: {{rest.address}}</span>
            <span> Rating: {{rest.rating}}</span>
            <button (click)="delete(rest._id, rest)">Delete</button>
            <button (click)='chooseFriend(rest._id)'>Invite</button>
            </li>
      </ul>
    </div>

  </div>
  `,
})

export class RestComponent implements OnInit{
  rests: Rest[];
  userRests: Rest[];

  constructor(private router: Router, private _authService: AuthService, private restService: RestService, private _errorService: ErrorService) { }

  chooseFriend(restID:string){
    localStorage.setItem('restID', restID);
    this.router.navigate(['/invite']);
  }

  add(name:string, address:string, rating:number): void{
    const rest = new Rest(localStorage.getItem('userId'), name, address, rating);
    this.restService.create(rest)
      .subscribe(
          data =>
          {
            console.log(data)
            if(data.message == "Success")
            {
              this.rests.push(rest); //Can erase when we don't want to show all Rests
              this.userRests.push(rest);
            }
          },
          error => this._errorService.handleError(error)
      )
  }

  delete(id: String, rest: Rest):void
  {
    this.restService.delete(id)
      .subscribe(
        data =>
        {
          console.log(data)
          if(data.message == "Success")
          {
            this.rests.splice(this.rests.indexOf(rest), 1); //Can erase when we don't want to show all Rests
            this.userRests.splice(this.userRests.indexOf(rest), 1);
          }
        },
        error => this._errorService.handleError(error)
      )
  }

  ngOnInit(){
    this.get();
    this.getAll();
  }

  get()
  {
    this.restService.get(localStorage.getItem('userId'))
      .subscribe(
        userRests => this.userRests = userRests,
        error => this._errorService = <any>error
      );
  }

  getAll()
  {
    this.restService.getRests()
            .subscribe(
              rests => this.rests = rests,
              error => this._errorService= <any>error);
  }

  isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}
