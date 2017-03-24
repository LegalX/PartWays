import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintDirective } from '../shared/print.directive';

@Component({
  selector: 'app-print-form',
  templateUrl: './print-form.component.html',
  styleUrls: ['./print-form.component.less'],
})
export class PrintFormComponent implements OnInit {
  appData: any;
  @ViewChild(PrintDirective) form: PrintDirective;
  clientID = 123123456;
  firstName = 'Alexander';
  lastName = 'Zhidkov';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.appData = this.route.snapshot.data['application'];
  }

  print() {
    this.form.print();
  }

}
