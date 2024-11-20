import seedrandom from 'seedrandom'

export default class RandomCode {
  constructor(Hnum, Lnum, Rnum) {
    this.Hnum = Hnum;
    this.Lnum = Lnum;
    this.Rnum = Rnum;
  }

  guid(time) {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16) + time;
    });
  }

  getRandomInt(min, max) {
    const seed = this.guid(new Date().getTime());
    const random = seedrandom(seed);
    min = Math.ceil(min); // 确保min是整数
    max = Math.floor(max); // 确保max是整数
    return Math.floor(random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
  }

  getHrr() {
    let arr = []
    while(arr.length < this.Hnum) {
      let ten = this.getRandomInt(0, 3).toString();
      let min = ten === '0' ? 1 : 0;
      let max = ten === '3' ? 3 : 9;
      let bit = this.getRandomInt(min, max).toString();
      const sum = (ten==='0'?'':ten) + bit;
      if(!arr.includes(sum)) {
        arr.push(sum)
      }
    }

    return arr.sort((a, b) => a - b).join(' ')
  }

  getLArr() {
    let arr = []
    while(arr.length < this.Lnum) {
      let ten = this.getRandomInt(0, 1).toString();
      let min = ten === '0' ? 1 : 0;
      let max = ten === '1' ? 6 : 9;
      let bit = this.getRandomInt(min, max).toString();
      const sum = (ten==='0'?'':ten) + bit;
      if(!arr.includes(sum)) {
        arr.push(sum)
      }
    }

    return arr.sort((a, b) => a - b).join(' ');
  }

  run() {
    let arr = []
    
    while(arr.length < this.Rnum) {
      const HStr = this.getHrr()
      const LStr = this.getLArr()
      const SStr = HStr + ' + ' + LStr;
      arr.push(SStr);
    }

    for (const item of arr) {
      console.log(item)  
    }
    return arr;
  }
}