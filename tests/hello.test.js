import hello from "../utils/hello";


it("It should say Evans", () => {
  const helloString = hello;
  console.log(helloString)

  expect(helloString).toBe("Evans");
})