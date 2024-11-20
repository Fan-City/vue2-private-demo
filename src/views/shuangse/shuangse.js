import seedrandom from 'seedrandom'

export default class RandomCode {
  constructor(Hnum, Lnum, Rnum) {
    this.Hnum = Hnum;
    this.Lnum = Lnum;
    this.Rnum = Rnum;
    this.hTenNumKey = [3, 2, 1, 0];
    this.hDigitArr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.hDigitArr12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.hDigitArr3 = [0, 1, 2, 3];

    this.lTenNumKey = [0, 1];
    this.lDigitArr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.lDigitArr1 = [0, 1, 2, 3, 4, 5, 6];
  }

  guid(time) {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16) + time;
    });
  }

  // 打乱盒子
  shuffle(arr) {
    var rdm;
    const seed = this.guid(new Date().getTime());
    const random = seedrandom(seed);
    for(var i=0;i<arr.length+10;i++){
      var rdm = Math.floor(random()*arr.length)
      arr.push(arr[rdm])
      arr.splice(rdm,1)
    }
    return arr;
  }

  // 获取红
  getHbool() {
    let hres = []
    
    let [hDigitArr, hDigitArr12, hDigitArr3] = [[...this.hDigitArr0], [...this.hDigitArr12], [...this.hDigitArr3]];
    let hten;
    let romMap = [
      [
        () => { return hten === 0 },
        () => { 
          hDigitArr = this.shuffle(hDigitArr);
          return hDigitArr.pop();
        }
      ],
      [
        () => { return hten === 1 || hten === 2 },
        () => { 
          hDigitArr12 = this.shuffle(hDigitArr12);
          return hDigitArr12.pop();
        }
      ],
      [
        () => { return hten === 3 },
        () => {
          hDigitArr3 = this.shuffle(hDigitArr3);
          return hDigitArr3.pop();
        }
      ]
    ]

    while(hres.length < this.Hnum) {
      hten = this.shuffle(this.hTenNumKey)[0];

      let target = romMap.find(item => item[0]());
      if(target[0]()) {
        hres.push(parseInt(hten.toString() + target[1]()));
      }
    }

    return hres.sort((a, b) => a - b).join(' ');
  }

  // 获取蓝
  getLbool() {
    let lres = []
    let [lDigitArr0, lDigitArr1] = [[...this.lDigitArr0], [...this.lDigitArr1]];
    let lten;
    let romMap = [
      [
        () => { return lten === 0 },
        () => {
          lDigitArr0 = this.shuffle(lDigitArr0);
          return lDigitArr0.pop();
        }
      ],
      [
        () => { return lten === 1},
        () => { 
          lDigitArr1 = this.shuffle(lDigitArr1);
          return lDigitArr1.pop();
        }
      ]
    ]

    while(lres.length < this.Lnum) {
      lten = this.shuffle(this.lTenNumKey)[0];

      let target = romMap.find(item => item[0]());
      if(target[0]()) {
        lres.push(parseInt(lten.toString() + target[1]()));
      }
    }
    return lres.sort((a, b) => a - b).join(' ');
  }

  // 获取N条数据
  getR() {
    let bArr = [];
    let len = this.Rnum;
    while(len > 0) {
      let [lStr, hStr] = [this.getLbool(), this.getHbool()];
      bArr.push(hStr + ' + ' + lStr);
      len--
    }

    return bArr;
  }

  // 启动和打印
  run() {
    let res = this.getR();
    
    return res;
  }
}