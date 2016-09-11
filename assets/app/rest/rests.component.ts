import { Component, OnInit } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import {AuthService} from "../auth/auth.service";
import {Rest} from "./rest";
import {RestService} from "./rest.service";

@Component({
  selector: "my-rests",
  templateUrl: "app/rest/rests.component.html",
  styleUrls: ["app/rest/rests.component.css"]
})

export class RestComponent{
  rests: Rest[];
  constructor(private heroService: RestService) { }
}
