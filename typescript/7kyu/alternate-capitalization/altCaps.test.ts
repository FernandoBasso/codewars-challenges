import { assertEquals } from "/deps.ts";
import { altCaps } from "./altCaps-v2.ts";

Deno.test("altCaps()", async (t) => {
  await t.step("should return empty string", () => {
    assertEquals(altCaps(""), ["", ""]);
  });

  await t.step("should return the single letter in uppercase", () => {
    assertEquals(altCaps("z"), ["Z", "z"]);
    assertEquals(altCaps("f"), ["F", "f"]);
  });

  await t.step("should work with words of two or more letters", () => {
    assertEquals(altCaps("xyz"), ["XyZ", "xYz"]);
    assertEquals(altCaps("wxyz"), ["WxYz", "wXyZ"]);
    assertEquals(altCaps("codewars"), ["CoDeWaRs", "cOdEwArS"]);
  });
});
