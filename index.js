let counter = 0;

let timer = function () {
    counter++;
    document.getElementById('display').innerText = counter;


}

let start_btn = document.getElementById('start');

start_btn.addEventListener('click', function () {
   
    if (start_btn.innerText = "Start") {
        set_id = setInterval(timer, 1000);
        document.getElementById('start').innerText = "Resume";


    }else{
        set_id = setInterval(timer, 1000);

    } 
});


let pause_btn = document.getElementById('pause');
pause_btn.addEventListener('click', function () {
    clearInterval(set_id);
})


let reset_btn = document.getElementById('reset');
reset_btn.addEventListener('click', function () {
    clearInterval(set_id);
    counter = 0;
    document.getElementById('display').innerText = counter;
    document.getElementById('start').innerText = "Start";
});

let restart_btn = document.getElementById('restart');
restart_btn.addEventListener('click', function () {
    counter = 0;
    document.getElementById('display').innerText = counter;
    
});

