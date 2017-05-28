import { PartWaysPage } from './app.po';

describe('PartWays App', () => {
  let page: PartWaysPage;

  beforeEach(() => {
    page = new PartWaysPage();
  });

  it('should have core buttons on landing page', () => {
    page.navigateTo();
    // ToDo remove <any> after migrating to Angular 4
    // https://github.com/AngularClass/angular2-webpack-starter/issues/1628
    expect<any>(page.getElementById('login-menu')).toEqual(true);
    expect<any>(page.getElementById('title-button')).toEqual(true);
  });
});
