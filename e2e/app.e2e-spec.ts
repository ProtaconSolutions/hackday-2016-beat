import { BeatPage } from './app.po';

describe('beat App', function() {
  let page: BeatPage;

  beforeEach(() => {
    page = new BeatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
