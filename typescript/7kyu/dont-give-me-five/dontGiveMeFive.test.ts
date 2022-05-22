import { assertEquals } from "/deps.ts";
import { dontGiveMeFive } from "./dontGiveMeFive-v2.ts";

Deno.test("noFive()", async (t) => {
  await t.step("should return 2 from 1 to 2", () => {
    assertEquals(dontGiveMeFive(1, 2), 2);
  });

  await t.step("should return 4 from 1 to 4", () => {
    assertEquals(dontGiveMeFive(1, 4), 4);
  });

  await t.step("should return 4 from 1 to 5", () => {
    assertEquals(dontGiveMeFive(1, 5), 4);
  });

  await t.step("should return 8 from 1 to 9", () => {
    assertEquals(dontGiveMeFive(1, 9), 8);
  });

  await t.step("should return 12 from 4 to 17", () => {
    assertEquals(dontGiveMeFive(4, 17), 12);
  });
});
