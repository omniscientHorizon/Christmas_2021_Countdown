const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const christmasTime = new Date("December 25 2021 00:00:00")


function updateCountdown(){
    
    const currentTime = new Date()
    const difference = christmasTime-currentTime
    
    const d = Math.floor(difference/1000 /60 /60 /24)
    const h = Math.floor(difference/1000 /60 /60 ) %24
    const m = Math.floor(difference/1000 /60 ) %60
    const s = Math.floor(difference/1000 ) %60
    
    days.innerHTML=d
    hours.innerHTML=h<10? '0'+h :h
    minutes.innerHTML=m<10? '0'+m :m
    seconds.innerHTML=s<10? '0'+s :s
}

setInterval(updateCountdown,1000)