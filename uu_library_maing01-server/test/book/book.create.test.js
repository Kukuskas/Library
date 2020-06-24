const { TestHelper } = require("uu_appg01_server-test");

beforeEach(async () => {
  await TestHelper.setup();
  await TestHelper.initApp();
});

afterEach(async () => {
  TestHelper.teardown();
});

describe("Book uuCMD tests", () => {
  test("example 04 - user profile", async () => {
    // Call sys/initAppWorkspace endpoint
    await TestHelper.initAppWorkspace();
    // Login as a predefined test user (see config/test.json)
    await TestHelper.login("myUser");

    let dtoIn = {
      title: "Head First - Javascript",
      author: "ORELLY",
      location: "Prague"
    };
    let result = await TestHelper.executePostCommand("book/create", dtoIn);

    expect(result.data.name).toEqual(dtoIn.name);
    expect(result.data.text).toEqual(dtoIn.text);
    expect(result.data.visibility).toEqual(false);
    // NOTE: uuIdentity and uuIdentityName can also be tested
    // for equality, if the values are known
    expect(result.data.uuIdentity).toBeDefined();
    expect(result.data.uuIdentityName).toBeDefined();
    expect(result.data.uuAppErrorMap).toEqual({});
  });

  test("example 04 - authorities profile", async () => {
    // Call sys/initAppWorkspace endpoint
    await TestHelper.initAppWorkspace();
    // Login as a predefined test user (see config/test.json)
    await TestHelper.login("myAuthority");

    let dtoIn = {
      title: "Head First - Javascript",
      author: "ORELLY",
      location: "Prague"
    };
    let result = await TestHelper.executePostCommand("book/create", dtoIn);

    expect(result.data.name).toEqual(dtoIn.name);
    expect(result.data.text).toEqual(dtoIn.text);
    expect(result.data.visibility).toEqual(true);
    // NOTE: uuIdentity and uuIdentityName can also be tested
    // for equality, if the values are known
    expect(result.data.uuIdentity).toBeDefined();
    expect(result.data.uuIdentityName).toBeDefined();
    expect(result.data.uuAppErrorMap).toEqual({});
  });

  test("example 04 - unauthorized", async () => {
    expect.assertions(1);

    // Call sys/initAppWorkspace endpoint
    await TestHelper.initAppWorkspace();

    let dtoIn = {
      title: "Head First - Javascript",
      author: "ORELLY",
      Location: "Prague"
    };
    try {
      await TestHelper.executePostCommand("book/create", dtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-appg01/authorization/accessDenied");
    }
  });
});
