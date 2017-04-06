import { PartWaysPage } from './app.po';

describe('PartWays App', () => {
  let page: PartWaysPage;

  beforeEach(() => {
    page = new PartWaysPage();
  });

  it('should have core buttons on landing page', () => {
    page.navigateTo();
    expect(page.getButton('PartWays')).toEqual(true);
    expect(page.getElementById('login-menu')).toEqual(true);
    expect(page.getElementById('title-button')).toEqual(true);
  });
});
