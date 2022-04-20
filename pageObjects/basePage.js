import { Builder, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import chromedriver from "chromedriver";

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const options = new chrome.Options();

const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();
global.driver = driver;
driver.manage().setTimeouts({ implicit: 100000 });
class BasePage {
  constructor() {
    this.driver = driver;
  }
  async open(url) {
    await this.driver.get(url);
  }
  async getAlertMessage() {
    await driver.wait(until.alertIsPresent());
    let alert = await this.driver.switchTo().alert();

    //Store the alert text in a variable
    return await alert.getText();
  }
  async closeAlert() {
    await driver.wait(until.alertIsPresent());
    let alert = await this.driver.switchTo().alert();
    await alert.accept();
  }
}
export default BasePage;
