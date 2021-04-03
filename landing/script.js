
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}



    setInterval(() => {
        document.getElementById('brand-1').style.marginRight = '-100%';
    }, 5000)

    setInterval(() => {
      document.getElementById('brand-2').style.marginRight = '-100%';
  }, 10000)



  document.getElementById('hambugger').addEventListener('click', () => {
      document.getElementById('ham-menu').style.display = 'flex';
      document.getElementById('hambugger').style.visibility = 'hidden';
      document.getElementById('logo-div').style.display = 'none';
})

  document.getElementById('close').addEventListener('click', () => {
      document.getElementById('ham-menu').style.display = 'none';
      document.getElementById('hambugger').style.visibility = 'visible';
      document.getElementById('logo-div').style.display = 'flex';
  })





