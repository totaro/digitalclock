const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    //console.log(h);

    if (h > 12){
        //h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()

    },1000)

}

updateClock()


/* Header */
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){

    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}