import a from './aaa.json'
export function pro() {
  return new Promise((resolve, reject) => {
    resolve(a);
  });
}