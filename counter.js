

let count =0;

const value = document.querySelector("#Value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click',function(f) {
    const styles = f.currentTarget.classList;
    if(styles.contains('Decs')){
        count--;
        value.style.color = "red";
    }
    else if (styles.contains('Inc')){
        count++;
        value.style.color = "green";
    }
    else{
        count=0;
        value.style.color = "black";
    } 
    value.textContent = count;

    });


});