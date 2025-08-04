document.getElementById("btn").addEventListener("click", function () {
    function final() {
        let result = Math.floor(Math.random() * 100);
        let name01=document.getElementById("yourname").value ;
        let name02=document.getElementById("friendname").value ;
        if(name01.length>2 && name02.length>2){
        if (result <= 100 && result >= 80) {
            alert(`your score ${result}% best friends`)
        }
        else if (result < 80 && result >= 50) {
            alert(`Your score " ${result}%
            Good Friends`)
        }
        else if (result < 50 && result >= 30) {
            alert(`Your score is ${result}%
          Avearge Friends`) 
        }
        else {
            alert(`Your score is ${result}%
            Weak Friends`)
        }
    }
    else{
        alert("Enter The names")
    }
    }
    function cal() {
        document.getElementById("finalresult").innerHTML = final()
    }
    cal()
});
