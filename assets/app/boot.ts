///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { provide } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import {RestComponent} from "./rest/rests.component";
import {RestService} from "./rest/rest.service";
import { AppComponent } from "./app.component";
import { FriendService } from "./friends/friend.service";
import { MessageService } from "./messages/message.service";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";

bootstrap(AppComponent, [RestService, FriendService, MessageService, AuthService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);
