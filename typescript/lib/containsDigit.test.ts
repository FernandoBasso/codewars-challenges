import { assertEquals } from "/deps.ts";
import { containsDigit } from "./containsDigit.ts";

Deno.test("containsDigit()", async (t) => {
  await t.step("should return false when digit is not present", () => {
    assertEquals(containsDigit(1, 0), false);
    assertEquals(containsDigit(1, 234), false);
    assertEquals(containsDigit(5, 123467890), false);
  });

  await t.step("should return true when digit is not present", () => {
    assertEquals(containsDigit(1, 1), true);
    assertEquals(containsDigit(1, 2314), true);
    assertEquals(containsDigit(5, 1234567890), true);
    assertEquals(containsDigit(5, 12345678590), true);
  });
});
