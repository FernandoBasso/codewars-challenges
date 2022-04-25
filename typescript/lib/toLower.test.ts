import { assertEquals } from "/deps.ts";
import { toLower } from "./toLower.ts";

Deno.test("toLower()", async (t) => {
  await t.step("should lowercase the input string", () => {
    assertEquals(toLower(""), "");
    assertEquals(toLower("yoda"), "yoda");
    assertEquals(toLower("Yoda"), "yoda");
    assertEquals(toLower("MASTER Yoda"), "master yoda");
  });
});
