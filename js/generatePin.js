document.getElementById('generate-btn').addEventListener('click', function(){
    const generateField = document.getElementById('generate-field');
    const pin = getPin();
    generateField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(e){
    const number = e.target.innerText;
    const numberField = document.getElementById('number-field');
    const preNumberValue = numberField.value;
    if(isNaN(number)) {
        if(number === "C"){
            numberField.value = '';
        }
        else if(number === "<") {
          const digits = preNumberValue.split('');
          digits.pop();
          numberField.value = digits.join('');
        }
    }
    else {
        const newNumber = preNumberValue + number;
        numberField.value = newNumber;
    }
});

document.getElementById('verfy-btn').addEventListener('click', function(){
    const numberField = document.getElementById('number-field');
    const verifyNumber = numberField.value;
    
    const generateField = document.getElementById('generate-field');
    const generateNumber = generateField.value;
    
    const wrang = document.getElementById('wrang');
    const success = document.getElementById('success');


    if(verifyNumber === generateNumber){
        wrang.style.display = "none";
        success.style.display = "block";
    }
    else {
        wrang.style.display = "block";
        success.style.display = "none";
    }

    
});