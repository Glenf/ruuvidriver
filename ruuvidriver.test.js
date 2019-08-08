describe("ruuvidriver", () => {
  it("is requirable", () => {
    const rd = require(".");
    expect(rd.init.call).toBeTruthy();
  });
});
