export const waitPageLoad = async () => {
  return await driver.wait(function () {
    return driver
      .executeScript("return document.readyState")
      .then(function (readyState) {
        return readyState === "complete";
      });
  });
};
