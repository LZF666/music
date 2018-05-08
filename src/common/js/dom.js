export function hasClass(el, className) {
  // 创建一个正则，可以以空白或者字符开头，结束后可以什么都没有
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  // 有这个classname就什么也不错
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
// 创建一个style，看看支持哪些style
let elementStyle = document.createElement('div').style
// 供应商 查看是否包含以下供应商
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    // 看看这个style中是否包含这个供应商名称
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }
  // 将自己加的属性名首字母改为大写，最后返回webkitTranslate属性名
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
