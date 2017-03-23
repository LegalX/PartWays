import { Component, OnInit, ViewChild } from '@angular/core';
import { PrintDirective } from '../shared/print.directive';

@Component({
  selector: 'app-print-form',
  templateUrl: './print-form.component.html',
  styleUrls: ['./print-form.component.less'],
})
export class PrintFormComponent implements OnInit {
  @ViewChild(PrintDirective) form: PrintDirective;
  clientID = 123123456;
  firstName = 'Alexander';
  lastName = 'Zhidkov';

  constructor() { }

  ngOnInit() { }

  print() {
    this.form.print();
  }

}
