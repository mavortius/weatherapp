import { Router } from 'aurelia-router';
import { bindable } from "aurelia-framework";

export class Navmenu {
  @bindable() title: string;
  @bindable() router: Router;

}
