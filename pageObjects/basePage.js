import { Builder } from "selenium-webdriver";
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
  open(url) {
    this.driver.get(url);
  }
}
export default BasePage;
