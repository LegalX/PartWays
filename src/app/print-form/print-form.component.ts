import {Component, OnInit, ViewChild} from '@angular/core';
import {PrintDirective} from "../shared/print.directive";

@Component({
  selector: 'app-print-form',
  templateUrl: './print-form.component.html',
  styleUrls: ['./print-form.component.less'],
})
export class PrintFormComponent implements OnInit {
  @ViewChild(PrintDirective) form: PrintDirective;
  clientID: number =  123123456;
  firstName: string =  "FName";
  lastName: string = "LName";

  constructor() { }

  ngOnInit() {}

  print() {
    this.form.print();
  }

}
