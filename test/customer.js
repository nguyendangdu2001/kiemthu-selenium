import loginPage from "../pageObjects/loginPage.js";
import chai from "chai";
import { until } from "selenium-webdriver";
import newCustomerPage from "../pageObjects/customerPage.js";
import { nanoid } from "nanoid";
chai.should();
const waitPageLoad = async () => {
  return await driver.wait(function () {
    return driver
      .executeScript("return document.readyState")
      .then(function (readyState) {
        return readyState === "complete";
      });
  });
};
describe("create new customer test", () => {
  before(async () => {
    loginPage.open();
    loginPage.login("mngr398778", "pEmynyh");
    await driver.wait(function () {
      return driver
        .executeScript("return document.readyState")
        .then(function (readyState) {
          return readyState === "complete";
        });
    });
  });
  beforeEach(() => {});
  // after(async () => {
  //   await driver.quit();
  // });
  it("Success test", async () => {
    newCustomerPage.open();
    newCustomerPage.create({
      name: "aaaaa",
      gender: "MALE",
      dob: "04-12-2001",
      addr: "aaaaaaaaa",
      city: "hoi an",
      state: "quang nam",
      pin: "123456",
      telephone: "0838019145",
      emailId: `${nanoid()}@gmail.com`,
      password: "12345",
    });

    await driver.wait(function () {
      return driver
        .executeScript("return document.readyState")
        .then(function (readyState) {
          return readyState === "complete";
        });
    });
    const aurl = await driver.getTitle();

    aurl.should.equal("Guru99 Bank Customer Registration Page");
  });
  //   it("Fail test", async () => {
  //     loginPage.open();
  //     loginPage.login("mngr39fsdsdf778", "pEmynyh");
  //     await driver.wait(until.alertIsPresent());
  //     let alert = await driver.switchTo().alert();

  //     //Store the alert text in a variable
  //     let alertText = await alert.getText();
  //     alertText.should.equal("User or Password is not valid");
  //   });
  //   it("no password and userid test", async () => {
  //     loginPage.open();
  //     loginPage.login("", "");
  //     await driver.wait(until.alertIsPresent());
  //     let alert = await driver.switchTo().alert();

  //     //Store the alert text in a variable
  //     let alertText = await alert.getText();
  //     alertText.should.equal("User or Password is not valid");
  //   });
});
