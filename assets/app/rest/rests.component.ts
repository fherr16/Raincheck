import { Component, OnInit, Input } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { ErrorService } from "../errors/error.service";
import { Router } from '@angular/router';

import {Rest} from "./rest";
import {RestService} from "./rest.service";
import {RestList} from "./restList";
import {RestListService} from "./restList.service";

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

<div style="border:1px solid">
  <h4> Current Restaurants In DB</h4>
    <ul *ngFor="let rest of rests">
      <li>
          <span> Name: {{rest.name}}</span>
          <span> Address: {{rest.address}}</span>
          <span> Rating: {{rest.rating}}</span>
          <button (click)="deleteRest(rest._id, rest)">Delete</button>
          </li>
    </ul>
</div>

<div style="border:1px solid">
  <h4> My Actual List</h4>
    <ul *ngFor="let rest of myRestList">
      <li>
          <span> Name: {{rest.name}}</span>
          <span> Address: {{rest.address}}</span>
          <span> Rating: {{rest.rating}}</span>
          </li>
    </ul>
</div>

<div style="border:1px solid">
  <h4>All RestList Items</h4>
    <ul *ngFor="let rest of restsList">
      <li>
          <span> userID: {{rest.userId}}</span>
          <span> restID: {{rest.restId}}</span>
          <button (click)="deleteRestList(rest._id, rest)">Delete</button>
          </li>
    </ul>
</div>
  `,
})

export class RestComponent implements OnInit{
  rests: Rest[] = [];
  restsList: RestList[] = [];
  myRestList: Rest[] = [];

  constructor(private router: Router, private restService: RestService, private _errorService: ErrorService, private restListService: RestListService) { }

  add(name:string, address:string, rating:number): void{
    const rest = new Rest(name, address, rating);
    this.restService.create(rest)
      .subscribe(
          data =>
          {
            console.log(data)
            if(data.message == "Success"){
                this.rests.push(rest);
                this.myRestList.push(rest);
                const restList = new RestList(localStorage.getItem('userId'), data.obj._id);
                this.restListService.create(restList)
                .subscribe(
                  data =>
                  {
                    console.log(data)
                    if(data.message == "Success"){
                      this.restsList.push(restList);
                    }
                  },
                error => this._errorService.handleError(error)
              )
            }
          },
          error => this._errorService.handleError(error)
      )
  }

  deleteRestList(id: String, restList: RestList):void
  {
    this.restListService.delete(id)
      .subscribe(
        data =>
        {
          console.log(data)
          if(data.message == "Success")
          {
            var index = this.restsList.indexOf(restList)
            this.restsList.splice(index, 1)
          }
        },
        error => this._errorService.handleError(error)
      )
  }

  deleteRest(id: String, rest: Rest):void
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
    this.getRestLists();
  }

  getRestLists(){
    this.restListService.getRestsList()
            .subscribe(
              restsList => {
                this.restsList = restsList;

                for(var i = 0; i < this.restsList.length; i++){
                  if(this.restsList[i].userId == localStorage.getItem('userId')){
                    for(var j = 0; j < this.rests.length; j++){
                      if(this.rests[j]._id == this.restsList[i].restId){
                        this.myRestList.push(this.rests[j]);
                      }
                    }
                  }
                }
              },
              error => this._errorService= <any>error);
  }

  getRests()
  {
    this.restService.getRests()
            .subscribe(
              rests => this.rests = rests,
              error => this._errorService= <any>error);
  }
}
