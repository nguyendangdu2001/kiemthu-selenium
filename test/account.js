import loginPage from "../pageObjects/loginPage.js";
import chai from "chai";
import { until } from "selenium-webdriver";

import { nanoid } from "nanoid";
import newAccountPage from "../pageObjects/accountPage.js";
import newCustomerPage from "../pageObjects/customerPage.js";
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
describe("create new account", () => {
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
    await newCustomerPage.open();
    await newCustomerPage.create({
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

    await waitPageLoad();
    customerId = await newCustomerPage.getCustomerId();
  });

  beforeEach(() => {});
  after(async () => {
    // await driver.close();
  });
  it.skip("Success test", async () => {
    await newAccountPage.open();
    await newAccountPage.create({
      customerId,
      type: "Savings",
      initialDeposit: 600,
    });

    await driver.wait(function () {
      return driver
        .executeScript("return document.readyState")
        .then(function (readyState) {
          return readyState === "complete";
        });
    });
    const aurl = await driver.getTitle();

    aurl.should.equal("Gtpl Bank Customer Registration Page");
  });
  it("Fail when customerId not right", async () => {
    await newAccountPage.open();
    await newAccountPage.create({
      customerId: "23214241",
      type: "Savings",
      initialDeposit: 600,
    });
    const alertMessage = await newAccountPage.getAlertMessage();
    await newAccountPage.closeAlert();
    alertMessage.should.equal("Customer does not exist!!");
  });
  it("Fail when not fill customerId and initialDeposit", async () => {
    await newAccountPage.open();
    await newAccountPage.create({});
    const alertMessage = await newAccountPage.getAlertMessage();
    await newAccountPage.closeAlert();
    alertMessage.should.equal("Please fill all fields");
  });
  it("Fail when intital deposit little than 500", async () => {
    await newAccountPage.open();
    await newAccountPage.create({
      customerId: customerId,
      type: "Savings",
      initialDeposit: 400,
    });
    const alertMessage = await newAccountPage.getAlertMessage();
    await newAccountPage.closeAlert();
    alertMessage.should.equal("Intial deposite must be Rs. 500 or more");
  });
});
