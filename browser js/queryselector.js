// query selectors cast a wider net
const headings = document.querySelectorAll('div')
const widget = document.querySelector('.widget')

// shows array of node list for divs - an array
// console.log(headings)

const contentToggle = () => {
  headings.forEach((heading) => {
    if (widget.classList.contains('showElement')) {
      widget.classList.replace('showElement', 'hideElement');
    } else {
      widget.classList.replace('hideElement', 'showElement');
    }
  })
}