import { assertEquals } from "/deps.ts";
import { isEven } from "./isEven.ts";

Deno.test("isEven()", async (t) => {
  await t.step("should return false for odd numbers", () => {
    assertEquals(isEven(-1), false);
    assertEquals(isEven(1), false);
    assertEquals(isEven(99), false);
    assertEquals(isEven(1e2 + 1), false);
    assertEquals(isEven(1e2 - 1), false);
  });

  await t.step("should return true for even numbers", () => {
    assertEquals(isEven(0), true);
    assertEquals(isEven(-0), true);
    assertEquals(isEven(42), true);
    assertEquals(isEven(1e2 + 2), true);
    assertEquals(isEven(1e2 - 2), true);
  });
});
