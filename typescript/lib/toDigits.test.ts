import { assertEquals } from "/deps.ts";
import { toDigits } from "./toDigits.ts";

Deno.test("toDigits()", async (t) => {
  await t.step("should return the single digit in an array", () => {
    assertEquals(toDigits(0), [0]);
    assertEquals(toDigits(-0), [0]);
    assertEquals(toDigits(-1), [1]);
    assertEquals(toDigits(9), [9]);
    assertEquals(toDigits(-9e0), [9]);
  });

  await t.step("should return the two digits in an array", () => {
    assertEquals(toDigits(10), [1, 0]);
    assertEquals(toDigits(-11), [1, 1]);
    assertEquals(toDigits(42), [4, 2]);
    assertEquals(toDigits(-99), [9, 9]);
  });

  await t.step("should return the three digits in an array", () => {
    assertEquals(toDigits(100), [1, 0, 0]);
    assertEquals(toDigits(-1e2), [1, 0, 0]);
    assertEquals(toDigits(111), [1, 1, 1]);
    assertEquals(toDigits(-947), [9, 4, 7 ]);
    assertEquals(toDigits(999), [9, 9, 9]);
  });

  await t.step("should return the four digits in an array", () => {
    assertEquals(toDigits(-1000), [1, 0, 0, 0]);
    assertEquals(toDigits(1e3), [1, 0, 0, 0]);
    assertEquals(toDigits(1111), [1, 1, 1, 1]);
    assertEquals(toDigits(9473), [9, 4, 7, 3]);
    assertEquals(toDigits(-9999), [9, 9, 9, 9]);
  });

  await t.step("should return the digits for other lengths", () => {
    assertEquals(toDigits(9e5), [9, 0, 0, 0, 0, 0]);
    assertEquals(toDigits(-9e5), [9, 0, 0, 0, 0, 0]);
    assertEquals(toDigits(9876543210), [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    assertEquals(toDigits(-9876543210), [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});
