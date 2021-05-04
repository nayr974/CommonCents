import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  // Find title text
  async getTitleText(): Promise<string> {
    return element(by.cssContainingText('h3', 'Common Cents')).getText();
  }
}
