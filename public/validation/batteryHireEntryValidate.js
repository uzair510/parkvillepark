// input variable initialization 
const Batterysize = document.entryForm.batterysize;
const Price = document.entryForm.price;

//displaying errors picked from id of error element in form
const batterysizeError = document.getElementById('bsize');
const priceError = document.getElementById('bprice');

// eventlisteners from the declared constants
Batterysize.addEventListener('blur', Batterysize_verify, true);
Price.addEventListener('blur', Price_verify, true);

//get value for input variables used to access the DOM
BatterysizeValue =  Batterysize.value;
PriceValue = Price.value;

// validations
function validate(){
     //first name validation, checking if its empty
     if(Batterysize.value ===''){
        batterysizeError.textContent = 'Battery size is required';
        // Batterysize.label = '1px solid red';
        Batterysize.focus();
        return false;
    }
    if(Price.value ===''){
        priceError.textContent = 'Price is required';
        // Price.border = '1px solid red';
        Price.focus();
        return false;
    }
}


//regex
// for battery size
const sizeRegex = /^[0-9a-zA-Z]+$/; // for batterysize
const priceRegex = /^([0-9]\d{10})+$/; // for price

//event handlers for correct data
//batterysize
function Batterysize_verify(){
    if(Batterysize.value !='' && Batterysize.value.match(sizeRegex)){
        // Batterysize.style.border ='1px solid green';
        batterysizeError.innerHTML = '';
        return true;
    }
    else{
        // Batterysize.style.border = '1px solid red';
        batterysizeError.textContent = 'Battery size should not contain symbols'
        Batterysize.focus();
       return false;
       }
}
//price 
function Price_verify(){
    if(Price.value !='' && Batterysize.value.match(priceRegex)){
        // Price.style.border ='1px solid green';
        priceError.innerHTML = '';
        return true;
    }
    else{
        // Price.style.border = '1px solid red';
        priceError.textContent = 'Price should only be figures'
        Price.focus();
        return false;
       }
}