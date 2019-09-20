$(document).ready(function () {
    $("#kayro").append("Start");
    rightCounter = 0;
    wrongCounter = 0;
    var theQuestions = [
        {
            
            question: "Who becomes the Lich King?",
            answer: {
                a: "Thrall",
                b: "Jaina",
                c: "Vol'jin",
                d: "Arthas",
            },
            correctAnswer: "d",
        },
        {
            
            question: "Who kills Garrosh?",
            answer: {
                a: "Thrall",
                b: "Durotan",
                c: "Ogrimm",
                d: "Uther",
            },
            correctAnswer: "a",
        },
        {
            
            question: "Who is the Leader of the Forsaken",
            answer: {
                a: "Raynor",
                b: "Sylvanas",
                c: "Chen",
                d: "Illidan",
            },
            correctAnswer: "b",
        },
        {
            
            question: "What Horde leader dies on the Broken Shore?",
            answer: {
                a: "Thrall",
                b: "Etrigg",
                c: "Vol'jin",
                d: "Garrosh",
            },
            correctAnswer: "c",
        },
        {
            
            question: "What year did World of Warcraft come out",
            answer: {
                a: "1994",
                b: "2004",
                c: "2000",
                d: "1999",
            },
            correctAnswer: "b",
        },
       
    ];
    $("#results").on("click", function () {
        $("#results").empty();
        submit();
    });
    $("#play-again").on("click", function () {
        $("#Box").empty();
        game();
    });
    $("#kayro").on("click", function () {
        $("#kayro").empty();
        var counter = 70;
        function timer() {
            $("#timer").html(counter)
            counter--;
            if (counter === -1) {
                alert("Times up")
                clearInterval(clock);
                submit();
            }
        }
        var clock = setInterval(timer, 1000);
        game();
    });
    function submit() {
        $("#results").empty();
        $("#Box").text("Hi")
        $("#play-again").text("Play Again")
    }
    function game() {
        for (i = 0; i < theQuestions.length; ++i) {
            $("#results").text("Submit");
            $("#again").empty();
            //Questions
            var newBox = $('<div class="allQ" id="newBox' + (i) + '" />');
            $("#Box").append(newBox);
            $("#newBox" + (i)).append((i + 1) + " " + theQuestions[i].question + " ");
            // Answers
            var answerBox = $('<div class="allAnswers" id="answerBox' + (i) + '" />')
            $("#Box").append(answerBox);
            $("#answerBox" + (i)).append('<input type ="radio"  value="True" name = "lee ' + (i) + '" class = "button" id = "radioA ' + (i) + '"/>' + " " +
                " A: " + myQuestions[i].answer.a + " " + '<input type = "radio"  value="True" name = "lee ' + (i) + '" class = "button" id = "radioB ' + (i) + '"/>' +
                "B: " + myQuestions[i].answer.b + " " + '<input type = "radio" value="True" name = "lee ' + (i) + '" class = "button" id = "radioC ' + (i) + '"/>' + " " +
                "C: " + myQuestions[i].answer.c + " " + '<input type ="radio" value="True" name = "lee ' + (i) + '" class = "button" id = "radioD ' + (i) + '"/>' + " " +
                "D: " + myQuestions[i].answer.d + " ");
        }
    }
    function final() {
        
    }
    final();
});
