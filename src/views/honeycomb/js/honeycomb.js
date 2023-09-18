export function creatHoneycomb(el, options) {
  const list = options;
  const itemNum = 5; // 每行数量
  const lineNum = list.length % itemNum == 0 ? Math.trunc(list.length / itemNum) : Math.trunc(list.length / itemNum) + 1; // 总行数
  // 位置补全
  if (list.length % itemNum != 0) {
    const len = list.length % itemNum;
    const lineLen = Math.trunc(list.length / itemNum);

    const temp = [
      [
        () => len == 1,
        () => { }
      ],
      [
        () => len == 2,
        () => list.splice(lineLen * itemNum + 1, 0, { key: '', value: '', imgurl: '' })
      ],
      [
        () => len == 3,
        () => {
          list.splice(lineLen * itemNum + 1, 0, { key: '', value: '', imgurl: '' });
          list.splice(lineLen * itemNum + 3, 0, { key: '', value: '', imgurl: '' });
        }
      ],
      [
        () => len == 4,
        () => list.splice(lineLen * itemNum + 3, 0, { key: '', value: '', imgurl: '' })
      ]
    ]

    const taget = temp.find(m => m[0]());
    taget[1]();
  };

  const copyList = list.slice(0, list.length);

  for (let i = 0; i < lineNum; i++) {
    const line = document.createElement('div');
    line.className = 'line'

    for (let j = 0; j < itemNum && j < list.length; j++) {
      const item = document.createElement('div');
      item.textContent = list[j].value;
      item.setAttribute('data-key', itemNum * i + j + 1);

      if (list[j].imgurl) {
        item.className = 'item';
        item.addEventListener('click', function (e) {
          const obj = copyList[parseInt(e.target.dataset.key) - 1];
          console.log(obj)
        });

        item.addEventListener('scroll', function (e) {
          console.log(e)
        });
      }
      line.appendChild(item);
    }

    list.splice(0, itemNum); // 去除已加如页面部分
    el.appendChild(line);
  }
}