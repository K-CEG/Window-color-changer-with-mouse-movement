document.body.addEventListener('mousemove', (event) =>{
    // console.log(event.clientX, event.clientY );
    document.querySelector('h1').textContent = `${event.clientX},${event.clientY}`
    // h1.textContent = `${event.clientX},${event.clientY}`;
    // h1.textContent = `${event.pageX},${event.pageY}`;
    // h1.textContent = `${screen.pageX},${screen.pageY}`;
    document.body.style.backgroundColor = `rgb(${event.clientX / 2},${event.clientY / 2}, ${event.clientX / event.clientY * 20})`;
  
})


// const h1 = document.querySelector('h1');
// document.body.addEventListener('mousemove', function(event) {
//     const x = event.clientX +1;
//     const y = event.clientY +1;
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     h1.textContent = x + ', ' + y;
//     const red = x/width * 100;
//     const green = y/height * 100;
//     const blue = 50;
//     document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`


// })