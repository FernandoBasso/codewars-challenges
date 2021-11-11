import { assertEquals } from "/deps.ts";
import { countBits } from "./count_bits.ts";

Deno.test("countBits()", async (t) => {
  await t.step("should produce 0 for input 0", () => {
      assertEquals(countBits(0), 0);
  });

  await t.step("should produce 1 for input 4", () => {
      assertEquals(countBits(4), 1);
  });

  await t.step("should produce 3 for input 7", () => {
      assertEquals(countBits(7), 3);
  });

  await t.step("should produce 2 for input 9", () => {
      assertEquals(countBits(9), 2);
  });

  await t.step("should produce 2 for input 10", () => {
      assertEquals(countBits(10), 2);
  });
});

