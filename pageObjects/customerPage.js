import { Builder, By, Key, until } from "selenium-webdriver";
import { waitPageLoad } from "../helper/waitingPageLoad.js";
import BasePage from "./basePage.js";

class CustomerPage extends BasePage {
  get nameInput() {
    return this.driver.findElement(By.name("name"));
  }
  get maleInut() {
    return this.driver.findElement(By.css("input[value=m]"));
  }
  get femaleInut() {
    return this.driver.findElement(By.css("input[value=f]"));
  }
  get passwordInput() {
    return this.driver.findElement(By.name("password"));
  }
  get dobInput() {
    return this.driver.findElement(By.name("dob"));
  }
  get addrInput() {
    return this.driver.findElement(By.name("addr"));
  }
  get cityInput() {
    return this.driver.findElement(By.name("city"));
  }
  get stateInput() {
    return this.driver.findElement(By.name("state"));
  }
  get pinnoInput() {
    return this.driver.findElement(By.name("pinno"));
  }
  get telephonenoInput() {
    return this.driver.findElement(By.name("telephoneno"));
  }
  get emailidInput() {
    return this.driver.findElement(By.name("emailid"));
  }
  async create(data) {
    // const uidInput = await this.driver.findElement(By.name("uid"));
    // const passwordInput = await this.driver.findElement(By.name("password"));
    await this.nameInput.sendKeys(data?.name);
    data?.gender === "MALE"
      ? await this.maleInut.click()
      : await this.femaleInut.click();
    await this.dobInput.sendKeys(data?.dob);
    await this.addrInput.sendKeys(data?.addr);
    await this.cityInput.sendKeys(data?.city);
    await this.stateInput.sendKeys(data?.state);
    await this.pinnoInput.sendKeys(data?.pin);
    await this.telephonenoInput.sendKeys(data?.telephone);
    await this.emailidInput.sendKeys(data?.emailId);
    await this.passwordInput.sendKeys(data?.password);
    await this.passwordInput.sendKeys(Key.RETURN);
  }
  async open() {
    await super.open(
      "https://www.demo.guru99.com/V4/manager/addcustomerpage.php"
    );
  }
  async getCustomerId() {
    await waitPageLoad();
    const div = await this.driver.findElement(
      By.xpath(
        "/html[1]/body[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[4]/td[2]"
      )
    );
    return await div.getText();
  }
}
const newCustomerPage = new CustomerPage();
export default newCustomerPage;
