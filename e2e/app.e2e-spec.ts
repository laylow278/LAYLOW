import { LAYLOWPage } from './app.po';

describe('laylow App', function() {
  let page: LAYLOWPage;

  beforeEach(() => {
    page = new LAYLOWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
