import { expect, test, describe } from "vitest";
import { cpfMask } from ".";

describe("utils/masks/cpfMask", () => {
  test("Should return 0", () => {
    expect(cpfMask("0")).toBe("0");
  });

  test("Should return 000.0", () => {
    expect(cpfMask("0000")).toBe("000.0");
  });

  test("Should return 000.000.0", () => {
    expect(cpfMask("0000000")).toBe("000.000.0");
  });

  test("Should return 000.000.000-00", () => {
    expect(cpfMask("00000000000")).toBe("000.000.000-00");
  });

  test("Should ignore non numeric characters", () => {
    expect(cpfMask("qwerty00")).toBe("00");
  });

  test("Should ignore long entries", () => {
    expect(cpfMask("00000000000000")).toBe("000.000.000-00");
  });
});
