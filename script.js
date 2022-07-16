console.log("script running...")
document.querySelector('.back').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.srinu').classList.toggle("srinugo");
 
if (document.querySelector('.srinu').classList.contains('srinugo')) {
  document.querySelector('.menu').style.display = 'inline' 
  document.querySelector('.back').style.display = 'none' 
} else {
    document.querySelector('.menu').style.display = 'none' 
  document.querySelector('.back').style.display = 'inline' 
}

});

// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.srinu').classList.toggle("srinugo");

// });