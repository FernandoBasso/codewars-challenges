import { assertEquals } from "/deps.ts";
// import { alphaSym, countMatching } from "./alphaSym-v1.ts";
// import { alphaSym, countMatching } from "./alphaSym-v2.ts";
import { alphaSym, countMatching } from "./alphaSym-v3.ts";

Deno.test("getNumMatching()", async (t) => {
  await t.step("should return 0", () => {
    assertEquals(countMatching(""), 0);
    assertEquals(countMatching("x"), 0);
    assertEquals(countMatching("xab"), 0);
  });

  await t.step("should return 1", () => {
    assertEquals(countMatching("a"), 1);
    assertEquals(countMatching("xyc"), 1);
  });

  await t.step("should return 2 or more", () => {
    assertEquals(countMatching("axc"), 2);
    assertEquals(countMatching("abc"), 3);
    assertEquals(countMatching("axczefg"), 5);
  });
});

Deno.test("alphaSym", async (t) => {
  await t.step('Testing for ["abode", "ABc", "xyzD"]', () => {
    assertEquals(alphaSym(["abode", "ABc", "xyzD"]), [4, 3, 1]);
  });

  await t.step('Testing for ["abide", "ABc", "xyz"]', () => {
    assertEquals(alphaSym(["abide", "ABc", "xyz"]), [4, 3, 0]);
  });

  await t.step('Testing for ["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]', () => {
    assertEquals(alphaSym(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]), [6, 5, 7]);
  });

  await t.step('Testing for ["encode", "abc", "xyzD", "ABmD"]', () => {
    assertEquals(alphaSym(["encode", "abc", "xyzD", "ABmD"]), [1, 3, 1, 3]);
  });
});
