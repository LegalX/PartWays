import { browser, element, by } from 'protractor';

export class PartWaysPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.buttonText('Part - Ways')).isPresent();
  }
}
