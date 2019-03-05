const { success, fail, repair } = require("./enhancer");

test("returns new item with enhancement increased", () => {
  expect(
    success({
      name: "iron fist",
      type: "weapon",
      durability: 100,
      enhancement: 0
    })
  ).toEqual({
    name: `[+1] iron fist`,
    type: "weapon",
    durability: 100,
    enhancement: 1
  });
});

it('should return message if "item" is not an object', () => {
  const message = "Need to pass in an object";

  expect(success(19)).toBe(message);
});

it('should return message if "item" is missing key value', () => {
  const message = "Item is missing required key value pair";

  expect(
    success({
      name: "iron fist",
      durability: 100,
      enhancement: 14
    })
  ).toBe(message);
});

it('should return message if "durability" or "enhancement" are not numbers', () => {
  const message = "durability and enhancement both need to be numbers";

  expect(
    success({
      name: "iron fist",
      type: "weapon",
      durability: "100",
      enhancement: 14
    })
  ).toBe(message);
});

it('should return message if "name" or "type" are not strings', () => {
  const message = "name and type need to be strings";

  expect(
    success({
      name: "iron fist",
      type: 12,
      durability: 100,
      enhancement: 14
    })
  ).toBe(message);
});

it("should decline enhancement if durability is lower than 25", () => {
  const message = "Can't enhance because durability is lower than 25";

  expect(
    success({
      name: "iron fist",
      type: "weapon",
      durability: 20,
      enhancement: 14
    })
  ).toBe(message);
});

test("returns item durability less 5, on fail", () => {
  expect(
    fail({
      name: "iron fist",
      type: "weapon",
      durability: 100,
      enhancement: 0
    })
  ).toEqual({
    name: `iron fist`,
    type: "weapon",
    durability: 95,
    enhancement: 0
  });
});

it('should return message if "item" is not an object', () => {
  const message = "Need to pass in an object";

  expect(fail(19)).toBe(message);
});

it('should return message if "item" is missing key value', () => {
  const message = "Item is missing required key value pair";

  expect(
    fail({
      name: "iron fist",
      durability: 100,
      enhancement: 14
    })
  ).toBe(message);
});

it('should return message if "durability" or "enhancement" are not numbers', () => {
  const message = "durability and enhancement both need to be numbers";

  expect(
    fail({
      name: "iron fist",
      type: "weapon",
      durability: "100",
      enhancement: 14
    })
  ).toBe(message);
});

it('should return message if "name" or "type" are not strings', () => {
  const message = "name and type need to be strings";

  expect(
    fail({
      name: "iron fist",
      type: 12,
      durability: 100,
      enhancement: 14
    })
  ).toBe(message);
});

test("returns item durability at 100", () => {
  expect(
    repair({
      name: "iron fist",
      type: "weapon",
      durability: 0,
      enhancement: 0
    })
  ).toEqual({
    name: `iron fist`,
    type: "weapon",
    durability: 100,
    enhancement: 0
  });
});

it('should return message if "item" is not an object', () => {
  const message = "Need to pass in an object";

  expect(repair(19)).toBe(message);
});

it('should return message if "item" is missing key value', () => {
  const message = "Item is missing required key value pair";

  expect(
    repair({
      name: "iron fist",
      durability: 100,
      enhancement: 14
    })
  ).toBe(message);
});

it('should return message if "durability" or "enhancement" are not numbers', () => {
  const message = "durability and enhancement both need to be numbers";

  expect(
    repair({
      name: "iron fist",
      type: "weapon",
      durability: "100",
      enhancement: 14
    })
  ).toBe(message);
});

it('should return message if "name" or "type" are not strings', () => {
  const message = "name and type need to be strings";

  expect(
    repair({
      name: "iron fist",
      type: 12,
      durability: 100,
      enhancement: 14
    })
  ).toBe(message);
});
