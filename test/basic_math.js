const basicMath = artifacts.require("basicMath");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("basicMath", function (/* accounts */) {
  it("the sum should not overflow", async function () {
    try {
      const instance = await basicMath.deployed();
      const addResult = await instance.add(2**256 - 1, 10);
      assert.ok(false, "The sum should overflow");
    } catch (error) {
      // Print the error
      console.log(error);
      assert.ok(true, "Caught the overflow error");
      
    }

  });
});
