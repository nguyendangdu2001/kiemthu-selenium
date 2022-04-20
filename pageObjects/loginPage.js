import { Builder, By, Key } from "selenium-webdriver";
import BasePage from "./basePage.js";

class LoginPage extends BasePage {
  get uidInput() {
    return this.driver.findElement(By.name("uid"));
  }
  get passwordInput() {
    return this.driver.findElement(By.name("password"));
  }
  async login(userId, password) {
    // const uidInput = await this.driver.findElement(By.name("uid"));
    // const passwordInput = await this.driver.findElement(By.name("password"));
    await this.uidInput.sendKeys(userId);
    await this.passwordInput.sendKeys(password);
    await this.passwordInput.sendKeys(Key.RETURN);
  }
  async open() {
    await super.open("https://www.demo.guru99.com/V4/");
  }
}
const loginPage = new LoginPage();
export default loginPage;
