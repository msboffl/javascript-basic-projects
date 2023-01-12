const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

let count = 0;
function changeNumber(e) {
  const styles = e.currentTarget.classList;
  // console.log(styles);
  if (styles.contains('decrease')) {
    count--;
  } else if (styles.contains('increase')) {
    count++;
  } else {
    count = 0;
  }
  if (count === 0) {
    value.style.color = '#222';
  } else if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  }
  value.textContent = count;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', changeNumber);
});
