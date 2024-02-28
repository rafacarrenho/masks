import { expect, test, describe } from "vitest";
import { moneyMask } from ".";

describe("utils/masks/moneyMask", () => {
  test("Should return $ 0.00", () => {
    expect(moneyMask("0")).toBe("$ 0.00");
  });

  test("Should return $ 0.01", () => {
    expect(moneyMask("1")).toBe("$ 0.01");
  });

  test("Should return $ 0.10", () => {
    expect(moneyMask("10")).toBe("$ 0.10");
  });

  test("Should return $ 1.00", () => {
    expect(moneyMask("100")).toBe("$ 1.00");
  });

  test("Should return $ 100,000.00", () => {
    expect(moneyMask("10000000")).toBe("$ 100,000.00");
  });

  test("Should ignore 0 at start", () => {
    expect(moneyMask("00001")).toBe("$ 0.01");
  });

  test("Should ignore strings at start", () => {
    expect(moneyMask("abc1")).toBe("$ 0.01");
  });
});
