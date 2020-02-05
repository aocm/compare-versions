import compareVersions from "../index"
import CompareVersions from "../CompareVersions"

test("sample", ()=>{
  expect(compareVersions("a","b")).toBe("ab")

})
describe('CompareVersions', () => {
  const comver = new CompareVersions("a", "b");

  test("AandB", ()=>{
    expect(comver.currentAndTarget()).toBe("ab")
    
  })

  test("version split to array",()=>{
    expect(comver.versionSplitByDotToArray("1.0.0")).toMatchObject(["1","0","0"])
    expect(comver.versionSplitByDotToArray("0.1.0")).toMatchObject(["0","1","0"])
    expect(comver.versionSplitByDotToArray("1.0.0.0")).toMatchObject(["1","0","0","0"])
  })

})