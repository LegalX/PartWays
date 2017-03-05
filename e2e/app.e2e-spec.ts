import { PartWaysPage } from './app.po';

describe('part-ways App', () => {
  let page: PartWaysPage;

  beforeEach(() => {
    page = new PartWaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
