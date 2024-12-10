// add money feature worked
//check function 
// document.getElementById('btn-AddMoney').addEventListener('click', function(event){
//     event.preventDefault();
//     const getMoney = getInputElementById();
//     console.log(getMoney);
// });


//main worked here (add money)
document.getElementById('btn-AddMoney').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputId('input-add-Money');
    const pinNumber = getInputId('amountPin');
    if(isNaN(addMoney)){
        alert('please amount');
        return;
    }
    if (pinNumber === 1234){
        const balance = getInputText('currentBalance');
        const newBalance = balance + addMoney;
        document.getElementById('currentBalance').innerText = newBalance;

        //sent data into transaction section 
        const div = document.createElement('div');
        div.classList.add ('bg-red-500', 'border-2', 'border-fuchsia-600', 'px-2');
        div.innerHTML =`
        <p class=" text-white">Money add </p>
        <p> add: ${addMoney} newBalance: ${newBalance} </p>
        `
        document.getElementById('transactionForm').appendChild(div);
    }
    else{
        alert('wrong password');
    }
});


// cash out worked here
document.getElementById('btn-Cash-Out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputId('input-CashOut-Money');
    const cashOutPin = getInputId('cashOut-Pin');

    if (isNaN(cashOut)) {
        alert('fuck you, please check cash out amount');
        return;
    }
    
    if (cashOutPin === 1234) {
        const balance = getInputText('currentBalance');
        if (cashOut > balance) {
            alert('you to no money');
            return;
        }
        
        const newBalance = balance - cashOut;
        document.querySelector('#currentBalance').innerText = newBalance;

        //sent data into transaction section 
        const div = document.createElement('div');
        div.classList.add('bg-red-500', 'border-2', 'border-fuchsia-600', 'px-2');
        div.innerHTML =`
        <p class=" text-white">Cash Out </p>
        <p> add: ${cashOut} newBalance: ${newBalance} </p>
        `
        document.getElementById('transactionForm').appendChild(div)
    }
    else{
        alert('wrong')
    }
});


//button worked show hide form 
document.getElementById('show-add-money-form').addEventListener('click', function(){
    showHideForm('addMoneyForm');
});
document.getElementById('show-cash-out-form').addEventListener('click', function(){
    showHideForm('cashOutForm');
});
document.getElementById('show-transaction-form').addEventListener('click', function(){
    showHideForm('transactionForm');
});