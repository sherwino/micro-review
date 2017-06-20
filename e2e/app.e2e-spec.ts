import { MicroReviewPage } from './app.po';

describe('micro-review App', () => {
  let page: MicroReviewPage;

  beforeEach(() => {
    page = new MicroReviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
