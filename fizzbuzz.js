for (let i=1; i<101; i++) {
   
    if ((i%3==0)&&(i%5==0)) { 
        console.log("FizzBuzz");
        document.getElementById('answer').innerHTML +=  "<div class='number'>" +
                                                        "<img id='fizz'src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ6ZlSPwwQDSEOHOqkYKqJoRwBnreL9WZNlA&usqp=CAU'/>" +
                                                        "FizzBuzz" +
                                                        "<img id='buzz' src='https://www.khwiki.com/images/thumb/b/b1/Buzz_Lightyear_KHIII.png/315px-Buzz_Lightyear_KHIII.png'/>" +
                                                        "</div>";
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
        document.getElementById('answer').innerHTML +=  "<div class='number'>"+
                                                        "Fizz" +
                                                        "<img id='fizz'src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ6ZlSPwwQDSEOHOqkYKqJoRwBnreL9WZNlA&usqp=CAU'/>" +
                                                        "</div>";
    }
    else if (i % 5 == 0) { 
        console.log("Buzz");
        document.getElementById('answer').innerHTML +=  "<div class='number'>" + 
                                                        "Buzz" +
                                                        "<img id='buzz' src='https://www.khwiki.com/images/thumb/b/b1/Buzz_Lightyear_KHIII.png/315px-Buzz_Lightyear_KHIII.png'/>" + 
                                                        "</div>";
    }
    else {
        console.log(i)
        document.getElementById('answer').innerHTML +=  "<div class='number'>" + 
                                                        i.toString() + 
                                                        "</div>";
    }

}




//document.getElementById('answer').innerHTML = "FizzBuzz";
