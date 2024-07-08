const documentHTML=document;
const inputs = document.querySelectorAll("input");
const sendBtn = document.getElementById('sendBtn');
const icon = document.querySelector("#sidebarCollapse i");
const smallData = document.querySelector('small');
const myTextArea= document.getElementById('textArea');
const remainCharText=document.getElementById('remainChar');
const MAX_CHARS=100;
let remaining = MAX_CHARS - myTextArea.value.length; 


$(function() {
    // Sidebar toggle behavior
    $("#sidebarCollapse").click(function () {
      $("#sidebar, #content").toggleClass("active");
    });
 
    //sideUp toggle behavior
    $(".accordion").click(function (e) {
      e.preventDefault();
      var $this = $(this);
 
      if (!$this.hasClass(".activeAccordion")) {
        $(".panel").slideUp(1000);
        $(".accordion").removeClass(".activeAccordion");
      }
 
      $this.toggleClass(".activeAccordion");
      $this.next().slideToggle();
    });
 
    //Counter behavior
    counterDown();
 
    //Count Remaining Characters
    remainChar();
  });


function counterDown(){
    let countdown = new Date("Septemper  17, 2024 18:00:00").getTime();


      let x = setInterval(function(){
        let now = new Date().getTime();
        let distance = countdown - now;
        if(distance < 0){
          clearInterval(x);
          console.log(distance);
      
          daysCounter= 00 + ' D';
          document.getElementById('hoursData').innerHTML= 00 + ' H';
          document.getElementById('minutesData').innerHTML= 00 + ' M';
          document.getElementById('secondsData').innerHTML= 00 + ' S';
        }
        else{
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
          let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
          let seconds = Math.floor(distance % (1000 *60) / 1000);


          document.getElementById('daysData').innerHTML= days + ' D';
          document.getElementById('hoursData').innerHTML= hours + ' H';
          document.getElementById('minutesData').innerHTML= minutes + ' M';
          document.getElementById('secondsData').innerHTML= seconds + ' S';
      }},1000);
    
  }
  
  function remainChar(){
    myTextArea.addEventListener('input',function(){  
      remaining = MAX_CHARS - myTextArea.value.length;
      const color = remaining <= MAX_CHARS * 0.1 ? 'red': null;
      remainCharText.textContent=`${remaining} Characters Remaining`;
      remainCharText.style.color=color; 
      if(remaining <= -1){
      //alert('no');
      sendBtn.setAttribute("disabled", true);
    }
    else{
      sendBtn.removeAttribute('disabled')
    }
    })
  };
  
  function setForm(){
    inputs[0].value='';
    inputs[1].value='';
    inputs[2].value='';
    myTextArea.value='';
    remaining=MAX_CHARS;
    remainCharText.textContent=`${remaining} Characters Remaining`;
    remainCharText.style.color=null; 
  }
  
  //icon
  function iconeToggle(element) {
    if (element.classList.contains("fa-bars")) {
      element.classList.replace("fa-bars", "fa-xmark");
      smallData.textContent='CLOSE';
    } else {
      element.classList?.replace("fa-xmark", "fa-bars");
      smallData.textContent='OPEN';
    }
  }
  
  
  sendBtn.addEventListener('click',function(e){
   e.preventDefault();
   setForm();
  });
  
  documentHTML.addEventListener('DOMContentLoaded',function(){
    sendBtn.removeAttribute('disabled'); 
  })
  
  sidebarCollapse.addEventListener('click',function(){
    iconeToggle(icon);
  })

