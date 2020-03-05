let time = document.getElementById('clock');

function clock() {
    let date = new Date();//Date Object
    let hours = date.getHours() ;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AmOrPm = date.getHours() ;
    setInterval(clock,1000)

    console.log(`${hours}: ${minutes}: ${seconds}`)
        time.innerHTML = `<h1>${hours}: ${minutes}: ${seconds} </h1>`

}

clock();
