async function start() {
  await Promise.resolve('async is working')
}

start().then(console.log)

const unused = 42

console.log(unused)
class Util {
  static id = Date.now()
}

console.log('Util.id: ', Util.id)