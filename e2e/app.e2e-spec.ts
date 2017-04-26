import { EmployeeUIPage } from './app.po';

describe('employee-ui App', () => {
  let page: EmployeeUIPage;

  beforeEach(() => {
    page = new EmployeeUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
