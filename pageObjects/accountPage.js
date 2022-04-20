import { Builder, By, Key, until } from "selenium-webdriver";
import BasePage from "./basePage.js";

class AccountPage extends BasePage {
  get customerIdInput() {
    return this.driver.findElement(By.name("cusid"));
  }
  get inidepositInut() {
    return this.driver.findElement(By.name("inideposit"));
  }

  get selaccountInput() {
    return this.driver.findElement(By.name("selaccount"));
  }
  async create(data) {
    // const uidInput = await this.driver.findElement(By.name("uid"));
    // const passwordInput = await this.driver.findElement(By.name("password"));
    await this.customerIdInput.sendKeys(data?.customerId);
    await this.driver.executeScript(
      `arguments[0].value="${data?.type}"`,
      this.selaccountInput
    );
    await this.inidepositInut.sendKeys(data?.initialDeposit);

    await this.inidepositInut.sendKeys(Key.RETURN);
  }
  async open() {
    await super.open("https://www.demo.guru99.com/V4/manager/addAccount.php");
  }
}
const newAccountPage = new AccountPage();
export default newAccountPage;
