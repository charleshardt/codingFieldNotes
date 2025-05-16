/////////////////////////////////////////////////
// 201-Events-and-Handlers

const h1 = document.querySelector('h1');

// Best practice today is use addEventListener
// h1.addEventListener('mouseenter', function (e) {
//   alert(
//     `addEventListener says, a mouse 🐭 entered the zone called "${this.outerText}."`
//   );
// });

// An older way using onmouseenter
// h1.onmouseenter = function (e) {
//   alert(
//     `onmouseenter says, a mouse 🐭 entered the zone called "${this.outerText}."`
//   );
// };

// addEventListener allows attaching multiple listeners to same event

// it also allows you to remove a listener if not required anymore:
// Alert only once:
const alertH1 = function (e) {
  alert(`A mouse 🐭 entered the zone called "${this.outerText}."`);
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// or do it on a timeout
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000);

// A third way. Do not use. From the old days (90s)
// Add to html h1: onclick="alert('alert message goes here')"
