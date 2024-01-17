Promise.myAll = function(proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  let i = 0;
  let fullSuccess = 0;
  const result = [];
  for (const prom of proms) {
    const index = i
    i++;

    Promise.resolve(prom).then((data) => {
      result[index] = data;
      fullSuccess++;
      if (fullSuccess === i) {
        res(result);
      }
    }, rej);
  }

  if(i === 0) {
    reo([]);
  }

  return p;
}

Promise.myAll([1, 2, 3]).then(res => {
  console.log(res, 'success');
}, err => {
  console.log(err, 'err');
});