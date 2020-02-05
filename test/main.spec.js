import compareVersions from "../index"
import CompareVersions from "../CompareVersions"

test("sample", ()=>{
  expect(compareVersions("a","b")).toBe("ab")

})
describe('CompareVersions', () => {
  const comver = new CompareVersions("a", "b");

  test("AandB", ()=>{
    expect(comver.CurrentAndTarget()).toBe("ab")
  })

})