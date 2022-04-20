import { Builder, By, Key, until } from "selenium-webdriver";
import BasePage from "./basePage.js";

class DepositPage extends BasePage {
  get accountIdInput() {
    return this.driver.findElement(By.name("accountno"));
  }
  get ammountInut() {
    return this.driver.findElement(By.name("ammount"));
  }

  get descInput() {
    return this.driver.findElement(By.name("desc"));
  }
  async create(data) {
    // const uidInput = await this.driver.findElement(By.name("uid"));
    // const passwordInput = await this.driver.findElement(By.name("password"));
    await this.accountIdInput.sendKeys(data?.accountId);

    await this.ammountInut.sendKeys(data?.ammount);
    await this.descInput.sendKeys(data?.desc);
    await this.descInput.sendKeys(Key.RETURN);
  }
  async open() {
    await super.open("https://www.demo.guru99.com/V4/manager/DepositInput.php");
  }
}
const depositPage = new DepositPage();
export default depositPage;
