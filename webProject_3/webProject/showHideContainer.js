const el = document.getElementById('container');


const btnList = document.querySelectorAll("#btn01, #btn02, #btn03");
const elementsArray = [...btnList];

// Now you can use cool array prototypes
elementsArray.forEach(element => {
    console.log(element);
});

el.style.visibility = 'visible';

el.addEventListener('click', function handleClick() {
  if (el.style.visibility === 'visible') {
    el.style.visibility = 'hidden';
  }
});

if (el.style.visibility = 'hidden') {  
    setInterval(() => {
    el.style.visibility = 'visible';
}, 3000);
}