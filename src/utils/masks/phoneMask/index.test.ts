import { expect, test, describe } from "vitest";
import { phoneMask } from ".";

describe("utils/masks/phoneMask", () => {
  test("Should return (00) 00000-0000", () => {
    expect(phoneMask("00000000000")).toBe("(00) 00000-0000");
  });

  test("Should return (00) 0000", () => {
    expect(phoneMask("000000")).toBe("(00) 0000");
  });

  test("Should return (00) 0-0000", () => {
    expect(phoneMask("0000000")).toBe("(00) 0-0000");
  });

  test("Should return (00) 00", () => {
    expect(phoneMask("0000")).toBe("(00) 00");
  });

  test("Should ignore long numbers", () => {
    expect(phoneMask("00000000000000000011")).toBe("(00) 00000-0000");
  });
});
