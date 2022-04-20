import loginPage from "../pageObjects/loginPage.js";
import chai from "chai";
import { until } from "selenium-webdriver";

import { nanoid } from "nanoid";

import newCustomerPage from "../pageObjects/customerPage.js";
import depositPage from "../pageObjects/depositPage.js";
import { waitPageLoad } from "../helper/waitingPageLoad.js";
chai.should();

describe("create new deposit", () => {
  let customerId;
  before(async () => {
    await loginPage.open();
    await loginPage.login("mngr398778", "pEmynyh");
    await driver.wait(function () {
      return driver
        .executeScript("return document.readyState")
        .then(function (readyState) {
          return readyState === "complete";
        });
    });
    // newCustomerPage.open();
    // newCustomerPage.create({
    //   name: "aaaaa",
    //   gender: "MALE",
    //   dob: "04-12-2001",
    //   addr: "aaaaaaaaa",
    //   city: "hoi an",
    //   state: "quang nam",
    //   pin: "123456",
    //   telephone: "0838019145",
    //   emailId: `${nanoid()}@gmail.com`,
    //   password: "12345",
    // });

    await waitPageLoad();
    // customerId = await newCustomerPage.getCustomerId();
  });
  beforeEach(() => {});
  // after(async () => {
  //   await driver.quit();
  // });
  after(() => {
    // driver.close();
  });
  it.skip("Success test", async () => {
    await depositPage.open();
    await depositPage.create({
      accountId: "23213",
      ammount: 5000,
      desc: "nothing",
    });

    await waitPageLoad();
    const aurl = await driver.getTitle();

    aurl.should.equal("Gtpl Bank Customer Registration Page");
  });
  it("Fail when customerId not right", async () => {
    await depositPage.open();
    await depositPage.create({
      accountId: "23213",
      ammount: 5000,
      desc: "nothing",
    });
    const alertMessage = await depositPage.getAlertMessage();
    await depositPage.closeAlert();
    alertMessage.should.equal("Account does not exist");
  });
  it("Fail when not fill customerId and initialDeposit", async () => {
    await depositPage.open();
    await depositPage.create({});
    const alertMessage = await depositPage.getAlertMessage();
    await depositPage.closeAlert();
    alertMessage.should.equal("Please fill all fields");
  });

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
