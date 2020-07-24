import { square, MyClass } from './module'
;(function () {
  'use strict'
  if (document.querySelector('.header__logo')) {
    setTimeout(function () {
      document.querySelector('.header__logo').classList.add('m--show')
    }, 1000)
  }
})()

console.log(square(5))
var cred = {
  name: 'Юрий Кучма!',
  enrollmentNo: 11115078,
}
var x = new MyClass(cred)
console.log(x.getName())
