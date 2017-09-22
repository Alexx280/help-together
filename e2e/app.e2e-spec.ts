import { HelpTogetherPage } from './app.po';

describe('help-together App', () => {
  let page: HelpTogetherPage;

  beforeEach(() => {
    page = new HelpTogetherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
