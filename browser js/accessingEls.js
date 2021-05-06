const heading = document.getElementById('mainHeading')

// can change component on page
//heading.onclick = () => {
//    console.log('I was clicked!')
//
//    if (heading.classList.contains('activeHeading')) {
//        heading.classList.remove('activeHeading');
//        heading.classList.add('nonActiveHeading')
//    } else {
//        heading.classList.remove('nonActiveHeading');
//        heading.classList.add('activeHeading')
//    }
//}

//The way of doing it below completely removes other classes though,
//not just removes and add specifically
heading.onclick = () => {
    console.log('I was clicked!')

    if (heading.classList.contains('activeHeading')) {
        heading.className = 'nonActiveHeading'
    } else {
        heading.className = 'activeHeading'
    }
}

// the smoothest way to switch out classes
heading.classList.replace('activeHeading', 'nonActiveHeading')