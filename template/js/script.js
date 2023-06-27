//header //

window.addEventListener("scroll",function(){
    var header = document.querySelector(".header");

    if(window.scrollY >= 100  ){
        header.style.background = "var(--color1)";
       
       
    }

    else {
        header.style.background = "none";
        

    }
});

// responsive header //


var respheader = document.querySelector(".header2");
var btn = document.querySelector(".bars");

btn.addEventListener("click", function ()
{
   if(  btn.firstElementChild.classList.contains("fa-bars")  ) 
    btn.firstElementChild.classList.replace("fa-bars","fa-x");

   

    else {

        btn.firstElementChild.classList.replace("fa-x","fa-bars");
        
    }

    respheader.classList.toggle("show");




});






const filterBtns = document.querySelectorAll('.filter-btn-group .links');
const portfolioItems = document.querySelectorAll('.portfolio-item');

for (let i = 0; i < filterBtns.length; i++) {
  const btn = filterBtns[i];
  btn.addEventListener('click', function () {
    const category = this.getAttribute('data-filter');
    filterPortfolioItems(category);
    setActiveButton(this);
  });
}

function filterPortfolioItems(category) {
  for (let i = 0; i < portfolioItems.length; i++) {
    const item = portfolioItems[i];
    const itemCategory = item.getAttribute('data-category');
    if (category === 'all' || category === itemCategory) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

function setActiveButton(activeBtn) {
  for (let i = 0; i < filterBtns.length; i++) {
    const btn = filterBtns[i];
    btn.classList.remove('active');
  }
  activeBtn.classList.add('active');
}

// Show all items and set the first button as active by default
filterPortfolioItems('all');
setActiveButton(filterBtns[0]);


// counting numbers 

  var count = document.getElementsByClassName("count"); 

var inc = [];

function intervalFunction(){
  for(let i=0; i<count.length; i++){
    inc.push(1); // add 

    if(inc[i] != count[i].getAttribute("max-data")){
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}
 var main = document.getElementById("main");

 window.onscroll = function(){
   var timer =  setInterval(()=>{

  var topElem = main.offsetTop;
  var btmElem = main.offsetTop + main.clientHeight;
  var topScreen = window.pageYOffset;
  var botScreen = window.pageYOffset + window.innerHeight;

  if (botScreen > topElem && topScreen < btmElem){
    intervalFunction();
  } 

  else {
    clearInterval(timer);
  }

 },100);
  
 }


