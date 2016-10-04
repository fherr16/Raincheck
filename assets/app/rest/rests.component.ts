import { Component, OnInit } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { ErrorService } from "../errors/error.service";

import {Rest} from "./rest";
import {RestService} from "./rest.service";

@Component({
  selector: "my-rests",
  templateUrl: "app/rest/rests.component.html",
  styleUrls: ["app/rest/rests.component.css"]
})

export class RestComponent{
  rests: Rest[];

  constructor(private restService: RestService, private _errorService: ErrorService) { }

  add(name:string, address:string, rating:number): void{
    const rest = new Rest(name, address, rating);
    this.restService.create(rest)
      .subscribe(
          data => console.log(data),
          error => this._errorService.handleError(error)
      )
  }
}
