function generate() {
    const random = Math.round(Math.random() *10000);
    return random;
}

function getPin() {
    const pin = generate();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else {
        return getPin();
    }
}