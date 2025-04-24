let clock=document.querySelector('.clock');
console.log(clock.innerHTML);


let sec=0,min=0,hr=0;
let interval;

let Start = () =>{
    console.log('Start');
    interval=setInterval(() =>{
        if(sec<59){
            sec++;
        }else if(min<59){
            sec=0;
            min++;
        }else{
            min=0;
            hr++;
        }
        console.log(`${hr}:${min}:${sec}`);
        let second=String(sec).padStart(2,"0");
        let minute=String(min).padStart(2,"0");
        let hour=String(hr).padStart(2,"0"); 
        clock.innerHTML=`${hour}:${minute}:${second}`;
    },1000)
}
let Stop = () =>{
    console.log('Stop');
    clearInterval(interval);
}
let Restart = () =>{
    console.log('Restart');
    clearInterval(interval);
    sec=0,min=0,hr=0;
    console.log(`${hr}:${min}:${sec}`);
    let second=String(sec).padStart(2,"0");
    let minute=String(min).padStart(2,"0");
    let hour=String(hr).padStart(2,"0"); 
    clock.innerHTML=`${hour}:${minute}:${second}`;
    Start();

}