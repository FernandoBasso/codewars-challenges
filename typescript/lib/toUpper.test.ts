import { assertEquals } from "/deps.ts";
import { toUpper } from "./toUpper.ts";

Deno.test("toLower()", async (t) => {
  await t.step("should uppercase the input string", () => {
    assertEquals(toUpper(""), "");
    assertEquals(toUpper("YODA"), "YODA");
    assertEquals(toUpper("Yoda"), "YODA");
    assertEquals(toUpper("masTer yoda"), "MASTER YODA");
  });
});
