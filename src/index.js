module.exports = function check(str, bracketsConfig) {
  const openSym = []
  const closeSym = []
  const control = []
  let rez = true

  const isEquals = (arrs, arr) => {
    return arrs.map(el => el.toString() == arr.toString()).some(el => el === true)
  }

  bracketsConfig.forEach(el => {
    openSym.push(el[0])
    closeSym.push(el[1])
  });

  str.split('').forEach(el => {
    if (openSym.includes(el)) { control.push(el) } else {
      if (closeSym.includes(el)) {
        if (control.length === 0) { rez = false } else {
          const tmpArrPair = [control.pop(), el]

          if (!isEquals(bracketsConfig, tmpArrPair)) { rez = false }
        }

      }
    }

  });

  if (control.length !== 0) { rez = false }

  return rez
}