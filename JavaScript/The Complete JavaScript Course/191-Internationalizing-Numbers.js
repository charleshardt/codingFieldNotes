/////////////////////////////////////////////////
// 191-Internationalizing-Numbers
const num = 2387263.32;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'USD',
  // useGrouping: true,
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Hungary: ', new Intl.NumberFormat('hu-HU', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('Spain: ', new Intl.NumberFormat('es-ES', options).format(num));
console.log(
  `Browser (${navigator.language}):`,
  new Intl.NumberFormat(navigator.language).format(num)
);
