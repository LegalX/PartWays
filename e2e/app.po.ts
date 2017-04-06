import { browser, by, element } from 'protractor';

export class PartWaysPage {
  navigateTo() {
    return browser.get('/');
  }

  getButton(text: string) {
    return element(by.buttonText(text)).isPresent();
  }

  getElementById(id: string) {
    return element(by.id(id)).isPresent();
  }
}
