import CompareVersions from "../main"

describe('CompareVersions', () => {
  const comver = new CompareVersions("2.1.0", "1.2.2");

  test("version split to array",()=>{
    expect(comver.versionSplitByDotToArray("1.0.0")).toMatchObject(["1","0","0"])
    expect(comver.versionSplitByDotToArray("0.1.0")).toMatchObject(["0","1","0"])
    expect(comver.versionSplitByDotToArray("1.0.0.0")).toMatchObject(["1","0","0","0"])
  })

  test("compare versions",()=>{
    let a,b
    a = "1.0.0"; b = "1.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
    a = "0.1.0"; b = "1.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(b);
    a = "0.0.1"; b = "1.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(b);
    a = "1.0.1"; b = "1.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
    a = "1.0.0"; b = "1.0.1";
    expect(comver.choiceNewerVersion(a,b)).toBe(b);
    a = "1.0.0"; b = "1.1.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(b);
    a = "1.0.1"; b = "2.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(b);
    a = "2.0.1"; b = "2.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
    a = "2.1.0"; b = "2.0.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
    a = "2.1.2"; b = "2.0.39";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
    a = "2.0.39"; b = "2.1.2";
    expect(comver.choiceNewerVersion(a,b)).toBe(b);
    a = "3.0.1"; b = "2.3.0";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
    a = "2.0.5"; b = "2.0.5";
    expect(comver.choiceNewerVersion(a,b)).toBe(a);
  })

  test("比較バージョンサイズが違う",()=>{
    let a,b;
    a = "2.0.5"; b = "2.0.5.0";
    expect(()=>comver.choiceNewerVersion(a,b)).toThrowError("version size error");
    a = "2.0.5.0"; b = "2.0.5";
    expect(()=>comver.choiceNewerVersion(a,b)).toThrowError("version size error");
  })
  test("compare versions",()=>{
    expect(comver.isNewerTarget()).toBe(false)
  })
  
})