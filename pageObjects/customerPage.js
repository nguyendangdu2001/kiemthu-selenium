import { Builder, By, Key } from "selenium-webdriver";
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
  create(data) {
    // const uidInput = await this.driver.findElement(By.name("uid"));
    // const passwordInput = await this.driver.findElement(By.name("password"));
    this.nameInput.sendKeys(data?.name);
    data?.gender === "MALE" ? this.maleInut.click() : this.femaleInut.click();
    this.dobInput.sendKeys(data?.dob);
    this.addrInput.sendKeys(data?.addr);
    this.cityInput.sendKeys(data?.city);
    this.stateInput.sendKeys(data?.state);
    this.pinnoInput.sendKeys(data?.pin);
    this.telephonenoInput.sendKeys(data?.telephone);
    this.emailidInput.sendKeys(data?.emailId);
    this.passwordInput.sendKeys(data?.password);
    this.passwordInput.sendKeys(Key.RETURN);
  }
  open() {
    super.open("https://www.demo.guru99.com/V4/manager/addcustomerpage.php");
  }
}
const newCustomerPage = new CustomerPage();
export default newCustomerPage;
