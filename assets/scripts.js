// const first = prompt("Masukan nama depan Anda :")
// const last = prompt("Masukan nama belakang Anda :")
// const lang = prompt("Masukan bahasa yang Anda gunakan :")

// const user = {
//     name : {
//         first : first,
//         last : last,
//     },
//     lang : lang
// }

// if (lang==="Jawa") {
//     alert("Piye kabare mas " + user.name.first + " " + user.name.last + "!")
// }else if(lang==="Sunda"){
//     alert("Kumaha damang a " + user.name.first + " " + user.name.last + "!" )
// }else if(lang==="Indonesia"){
//     alert("Bagaimana kabarnya mas " + user.name.first + " " + user.name.last + "!")
// }

const calculator = {
    displayNumber : '0',
    firstNumber : null,
    operator : null,
    isWait : false
}


function updateDisplay(){
    document.querySelector('#displayNumber').innerHTML = calculator.displayNumber
}

function clearCalculator() {
    calculator.displayNumber = '0'
    calculator.firstNumber = null
    calculator.operator = null
    calculator.isWait = false
}

function inputDigits(digit) {

   if(calculator.displayNumber==='0'){
        calculator.displayNumber = digit
   }else{
    calculator.displayNumber+=digit
   }
}

function inverseNumber() {
    if(calculator.displayNumber==='0'){
        return
    }
    calculator.displayNumber = calculator.displayNumber*-1
}

function handleOperator(operator) {
    if(!calculator.isWait){
        calculator.operator = operator
        calculator.isWait = true
        calculator.firstNumber = calculator.displayNumber


        calculator.displayNumber='0'
    }else{
        alert("Operator telah diterapkan")
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator")
        return
    }

    let result = 0
    if(calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    }else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
   
    //    // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
    // const history = {
    //     firstNumber: calculator.firstNumber,
    //     secondNumber: calculator.displayNumber,
    //     operator: calculator.operator,
    //     result: result
    // }
    // putHistory(history);
    calculator.displayNumber = result;
    // renderHistory();


}



const buttons = document.querySelectorAll('.button')

for(const button of buttons){
    button.addEventListener('click',(event)=>{

        const target = event.target

        if (target.classList.contains('clear')) {
            clearCalculator()
            updateDisplay()
            return
        }

        if (target.classList.contains('negative')) {
            inverseNumber()
            updateDisplay()
            return
        }

        if (target.classList.contains('equals')) {
            performCalculation()
            updateDisplay()
            return
        }

        if (target.classList.contains('operator')) {
            handleOperator(target.innerHTML)
            updateDisplay()
            return
        }

        inputDigits(target.innerHTML)
        updateDisplay()
    })
}


