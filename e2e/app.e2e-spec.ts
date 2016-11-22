import { TrllblgPage } from './app.po';

describe('trllblg App', function() {
  let page: TrllblgPage;

  beforeEach(() => {
    page = new TrllblgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
