// function abc(){
//     console.log("Hello")
// }
// function oppo(){
//     console.log("This is Oppo Phone")
// }

// function vivo(){
//     console.log("This vivo phone")
// }

// vivo()
// oppo()
// abc()

// alert("Hii")

// var a=10
// var b=20

// function add(){
//     console.log(a+b)
// }

// add()

// alert(btn("  "))

// var homeWork = true
// if (homeWork) {
//   console.log("Great job")
// } else {
//     console.log("Finish your Homework befor playing")
// }


// var color = "red"

// if (color == "red") {
//     console.log("Stop")
// } 

// if (color == "Yellow") {
//     console.log("Redy")
// } 

// if (color == "Green") {
//     console.log("GO")
// } 


// var mark = 35

// if(mark <= 40 && mark >= 50){
//     console.log("BAD")
// }

// else if(mark > 50 && mark <= 70){
//     console.log("Good")
// }

// else if(mark >70){
//     console.log("Grate JOB")
// }
// else{
//     console.log("Fail")
// }

// for (count=1;count<=10;count=count+1 ) {
//     console.log(count+"x2="+(count*2))
// }

        var box1 = document.getElementById("num1")
        var box2 = document.getElementById("num2")

        var result = document.getElementById("result")

        function resultfunction(){
        var box1value=Number(box1.value)
        var box2value=Number(box2.value)

        var total = box1value-box2value 
        // var total = box1value-box2value 
        // var total = box1value*box2value 
        // var total = box1value/box2value 

            result.textContent =total
            // result.textContent =total
            // result.textContent =total
            // result.textContent =total
            
        } 

        alert("HI")