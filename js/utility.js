// check function 
// function getInputElementById(){
//     const amount = document.getElementById('input-add-Money').value;
//     return amount;
// };

// main worked start here 
function getInputId(getId){
    const inputValue = document.getElementById(getId).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getInputText (textId){
    const textValue = document.getElementById(textId).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

//balance update function pari nai
// function accountBalance (id){
//     const updateMoney = document.getElementById('currentBalance').innerText = newBalance;
//     return updateMoney;
// }; 

// button worked show hide form
showHideForm = (idName) => {
    document.getElementById('addMoneyForm').classList.add('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
    document.getElementById('transactionForm').classList.add('hidden');

    document.getElementById(idName).classList.remove('hidden');
}