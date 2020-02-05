export default class CompareVersions{
  constructor(current, target){
    this.current = current;
    this.target = target;
  }
  currentAndTarget(){
    return this.current + this.target;
  }
  /**
   * "1.0.0"などのバージョンをArrayに変換する
   * 例："1.0.0" -> ["1","0","0"]
   * @param version :string 
   */
  versionSplitByDotToArray(version){
    return version.split(".")
  }
  isNewerTarget(){
    let currentVersionArray = versionSplitByDotToArray(this.current)
    let targetVersionArray = versionSplitByDotToArray(this.target)

    return 
  }
}