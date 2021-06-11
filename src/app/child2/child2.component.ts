import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.scss"],
})
export class Child2Component implements OnInit {
  rama = "this is view chile methoid";

  @Output() nameChangevalue = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  nameChange() {
    this.nameChangevalue.emit("name has been vchanged to deevith");
  }
}
