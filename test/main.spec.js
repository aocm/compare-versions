import compareVersions from "../index"

test("sample", ()=>{
  expect(compareVersions("a","b")).toBe("ab")

})