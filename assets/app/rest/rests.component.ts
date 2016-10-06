import { Component, OnInit } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { ErrorService } from "../errors/error.service";
import { Router } from '@angular/router';

import {Rest} from "./rest";
import {RestService} from "./rest.service";

@Component({
  selector: "my-rests",
  template: `
  <h1> My Restaurants </h1>
  <div>
    <label> Name: </label><input #restName />
    <label> Address: </label><input #restAddress />
    <label> Rating: </label><input #restRating />
    <button (click)="add(restName.value, restAddress.value, restRating.value); restName.value=''">
      Add
    </button>
  </div>
  `,
})

export class RestComponent{
  rests: Rest[];

  constructor(private router: Router, private restService: RestService, private _errorService: ErrorService) { }

  add(name:string, address:string, rating:number): void{
    const rest = new Rest(name, address, rating);
    this.restService.create(rest)
      .subscribe(
          data => console.log(data),
          error => this._errorService.handleError(error)
      )
  }
}
