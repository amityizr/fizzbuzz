for (let i=1; i<101; i++) {
    if ((i%3==0)&&(i%5==0)) { 
        console.log("FizzBuzz");
        document.getElementById('answer').innerHTML += "<br> FizzBuzz";
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
        document.getElementById('answer').innerHTML += "<br> Fizz";
    }
    else if (i % 3 == 0) { 
        console.log("Buzz");
        document.getElementById('answer').innerHTML += "<br> Buzz";
    }
    else {
        console.log(i)
        document.getElementById('answer').innerHTML += "<br>"
        document.getElementById('answer').innerHTML += i.toString();
    }
}




//document.getElementById('answer').innerHTML = "FizzBuzz";
