import { Builder, By, Key } from "selenium-webdriver";
import BasePage from "./basePage.js";

class LoginPage extends BasePage {
  get uidInput() {
    return this.driver.findElement(By.name("uid"));
  }
  get passwordInput() {
    return this.driver.findElement(By.name("password"));
  }
  login(userId, password) {
    // const uidInput = await this.driver.findElement(By.name("uid"));
    // const passwordInput = await this.driver.findElement(By.name("password"));
    this.uidInput.sendKeys(userId);
    this.passwordInput.sendKeys(password);
    this.passwordInput.sendKeys(Key.RETURN);
  }
  open() {
    super.open("https://www.demo.guru99.com/V4/");
  }
}
const loginPage = new LoginPage();
export default loginPage;
