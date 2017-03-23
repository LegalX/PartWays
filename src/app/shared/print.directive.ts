import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Directive({
  selector: '[print-form]',
})
export class PrintDirective implements OnInit {
  @Input() styleFileName: string;
  inlineStyles = '';

  constructor(private el: ElementRef, private http: Http) { }

  ngOnInit() {
    if (this.styleFileName) {
      this.http.get('/assets/print-styles/' + this.styleFileName).subscribe(
        (res) => {
          this.inlineStyles = res.text();
        },
      );
    } else {
      console.log('print styles is missing');
    }
  }

  print() {
    let printContents;
    let popupWin;
    printContents = this.el.nativeElement.outerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=0');
    popupWin.document.open();
    popupWin.document.write(
      '<html>' +
      '<head>' +
      '<title>Print tab</title>' +
      '<style>' + this.inlineStyles + '</style>' +
      '</head>' +
      '<body onload="window.print();window.close()">' + printContents + '</body>' +
      '</html>',
    );
    popupWin.document.close();
  }
}
