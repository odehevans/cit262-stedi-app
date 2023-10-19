import sayHello from "../utils/helloworle.mjs";
import assert from "assert";

it("Hello World", ()=>{
  const hello = sayHello();
  assert.equal(hello, "hello")
})