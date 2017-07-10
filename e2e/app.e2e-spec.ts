import { NovaAngularPage } from './app.po';

describe('nova-angular App', () => {
  let page: NovaAngularPage;

  beforeEach(() => {
    page = new NovaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
