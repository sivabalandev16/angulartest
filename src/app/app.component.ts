import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Child2Component } from "./child2/child2.component";
import { UserService } from "./serivces/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild(Child2Component, { static: false }) child;

  constructor(private cdref: ChangeDetectorRef, private userSer: UserService) {}

  title = "sivabalan";
  passData1 = "message coming from parent";
  billa;

  ngOnChanges() {
    console.log("ngOnChanges");
    this.title = this.child.rama;
  }
  ngOnInit() {
    console.log("ngOnInit");
    this.userSer.fetchData().subscribe((data) => {
      console.log(data);
    });
  }

  testmethod() {
    this.userSer.getApi().subscribe((res) => {
      //  console.log(res)
      this.userSer.PushData(res);
    });
  }

  ngAfterViewInit() {
    this.title = this.child.rama;
    this.cdref.detectChanges();
  }

  name(event) {
    console.log(event);
    this.title = event;
  }
}
