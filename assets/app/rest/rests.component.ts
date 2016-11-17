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
    <button (click)="add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null">
      Add
    </button>
  </div>

<h4> Current Restaurants </h4>
  <ul *ngFor="let rest of rests">
    <li>
        <span> Name: {{rest.name}}</span>
        <span> Address: {{rest.address}}</span>
        <span> Rating: {{rest.rating}}</span>
        <button (click)="delete(rest._id, rest)">Delete</button>
    </li>
  </ul>
  `,
})

export class RestComponent implements OnInit{
  rests: Rest[];

  constructor(private router: Router, private restService: RestService, private _errorService: ErrorService) { }

  add(name:string, address:string, rating:number): void{
    const rest = new Rest(name, address, rating);
    this.restService.create(rest)
      .subscribe(
          data =>
          {
            console.log(data)
            if(data.message == "Success")
              this.rests.push(rest)
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
            var index = this.rests.indexOf(rest)
            this.rests.splice(index, 1)
          }
        },
        error => this._errorService.handleError(error)
      )
  }

  ngOnInit(){
    this.getRests();
  }

  getRests()
  {
    this.restService.getRests()
            .subscribe(
              rests => this.rests = rests,
              error => this._errorService= <any>error);
    console.log("Finished with getRests()");
  }
}
