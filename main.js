/**
 * バージョンの比較をするクラス
 */
export default class CompareVersions{

  constructor(current, target){
    this.current = current;
    this.target = target;
  }

  isNewerTarget(){
    try{
      return (this.target === this.choiceNewerVersion(this.current, this.target))
    }catch(e){
      console.log(e);
    }
    return; 
  }

  /**
   * "1.0.0"などのバージョンをArrayに変換する
   * 例："1.0.0" -> ["1","0","0"]
   * @param {string} version
   */
  versionSplitByDotToArray(version){
    return version.split(".")
  }

  /**
   * 新しい方のバージョンを返却する
   * @param {string} a 
   * @param {string} b 
   */
  choiceNewerVersion(a, b){
    let arrayA = this.versionSplitByDotToArray(a)
    let arrayB = this.versionSplitByDotToArray(b)
    
    if(a === b){
      return a //どちらも同じなので
    }
    if(arrayA.length !== arrayB.length){
      throw new Error("version size error");
    }
    for(let i = 0; i < arrayA.length; i++){
      if(Number(arrayA[i]) === Number(arrayB[i])){
        // console.log("next")
      }else if(Number(arrayA[i]) < Number(arrayB[i])){
        return b;
      }else if(Number(arrayA[i]) > Number(arrayB[i])){
        return a;
      }
    }
    return a; //どちらも同じなので
  }
  

}