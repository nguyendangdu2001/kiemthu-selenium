import loginPage from "../pageObjects/loginPage.js";
import chai from "chai";
import { until } from "selenium-webdriver";
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
describe.skip("Login test", () => {
  beforeEach(() => {});
  // after(async () => {
  //   await driver.quit();
  // });
  it("Success test", async () => {
    loginPage.open();
    loginPage.login("mngr398778", "pEmynyh");
    await driver.wait(function () {
      return driver
        .executeScript("return document.readyState")
        .then(function (readyState) {
          return readyState === "complete";
        });
    });
    const aurl = await driver.getCurrentUrl();

    aurl.should.equal(
      "https://www.demo.guru99.com/V4/manager/Managerhomepage.php"
    );
  });
  it("Fail test", async () => {
    loginPage.open();
    loginPage.login("mngr39fsdsdf778", "pEmynyh");
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();
    alertText.should.equal("User or Password is not valid");
  });
  it("no password and userid test", async () => {
    loginPage.open();
    loginPage.login("", "");
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();
    alertText.should.equal("User or Password is not valid");
  });
});
