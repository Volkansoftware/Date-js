let myNameDOM = document.querySelector('#myName');
let greetingDOM = document.querySelector('#greeting');
let myClockDOM = document.querySelector('#myClock');
let dayDOM = document.querySelector('#day');
const askName = () =>{
    let isname =  prompt('bir isim giriniz');
    myNameDOM.innerHTML= `${isname}`;
    startTime();
    getDay();
}
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
   
    m = checkTime(m);
    s = checkTime(s);
    myClockDOM.innerHTML = `${h}: ${m}: ${s}`;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }


  function getDay ()
  {
      var days = new Date();
      
      var d = days.getDay();
    
    if(d==1)
    {
        dayDOM.innerHTML =`Pazartes`
    }
    else if(d==2)
    {
        dayDOM.innerHTML =`salı`
    }
    else if(d==3)
    {
        dayDOM.innerHTML =`Çarşamba`
    }
    else if(d==4)
    {
        dayDOM.innerHTML =`Perşembe`
    }
    else if(d==5)
    {
        dayDOM.innerHTML =`Cuma`
    }
    else if(d==6)
    {
        dayDOM.innerHTML =`Cumartesi`
    }
    else if(d==7)
    {
        dayDOM.innerHTML =`Pazar`
    }
  }
askName();

