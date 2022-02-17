//function for eroor handling

//if input type is not number
function typeError(){
const failNotify = document.getElementById('notify-fail');
    const negativeNotify = document.getElementById('negative-value');
    const moneyEfficiency = document.getElementById('money-efficiency');

    failNotify.style.display = 'block';
    negativeNotify.style.display = 'none';
    moneyEfficiency.style.display = 'none';

};
//if input is not positive number
function negativeValue(){
    const failNotify = document.getElementById('notify-fail');
    const negativeNotify = document.getElementById('negative-value');
    const moneyEfficiency = document.getElementById('money-efficiency');

    negativeNotify.style.display = 'block';
    failNotify.style.display = 'none';
    moneyEfficiency.style.display = 'none';
};

// for money efficiency problem

function savingsError(){
    const moneyEfficiency = document.getElementById('money-efficiency');

    moneyEfficiency.style.display = 'block';
    negativeNotify.style.display = 'none';
    failNotify.style.display = 'none';

};

//Function for calculator Button
 function generalEquation(){
     //Declare Value
    const income = document.getElementById('income-input').value;

    const foodInput = document.getElementById('food-input').value;
    
    const rentInput = document.getElementById('rent-input').value;
    
    const clothesInput = document.getElementById('colthes-input').value;

    const expenses = document.getElementById('total-expense');
    let allThreeExpense = expenses.innerText;

    //Declare for eroor handling

    const failNotify = document.getElementById('notify-fail');
    const negativeNotify = document.getElementById('negative-value');
    const moneyEfficiency = document.getElementById('money-efficiency');

    //Calculation For Total Expense

    //Error Handeling part
    if(isNaN(income)){
     typeError();
    }
    else if(income < 0){
        negativeValue();
    }
    else if (isNaN(foodInput) ) {

        typeError();      
    }

    else if(foodInput<0){

        negativeValue();

    }
    else if(isNaN(rentInput)){
        typeError(); 
    }
    else if(rentInput<0){
        negativeValue();
    }

    else if (isNaN(clothesInput)) {
        typeError();
    }

    else if(clothesInput<0){
        negativeValue();
    }

    else{
        const totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
        
        const finalTotalExpense = parseFloat(allThreeExpense) + parseFloat(totalExpense);

    //set value in total Expense

    expenses.innerText = finalTotalExpense;

       
    //Calculation For Balance

    const inputBalance = document.getElementById('total');
    const previousBalance = inputBalance.innerText;

    const currentAndPreviousBal = parseFloat(income)+ parseFloat(previousBalance);

    const totalBalance = parseFloat(currentAndPreviousBal) - parseFloat(finalTotalExpense);
    //set value in Balance

    inputBalance.innerText =totalBalance;

     failNotify.style.display = 'none';

     negativeNotify.style.display = 'none';
     moneyEfficiency.style.display = 'none';

    }

    
 

} ;



// Calling Calculate Button

document.getElementById('calc-btn').addEventListener('click',function(){
    

    generalEquation();
  
    
});



//Function for Save Button

function finalEquation(){
    //Declare Value

    const saveInput = document.getElementById('save-input');
    const previousSaveInput = saveInput.value; 

    const savingAmount = document.getElementById('saving-amount');
    const currentSave = savingAmount.innerText;

    
    const income = document.getElementById('income-input').value;

    //Declare for eroor handeling

    const failNotify = document.getElementById('notify-fail');
    const negativeNotify = document.getElementById('negative-value');
    const moneyEfficiency = document.getElementById('money-efficiency');

 if(isNaN(income)){
     typeError();
 }
    else if(income < 0){
        negativeValue();
    }

    else if(isNaN(previousSaveInput)){
       typeError();      
    }
    else if(previousSaveInput < 0){
        negativeValue();
    }

 else{
     const Balance = document.getElementById('total').innerText;
        //calculation for saving Amount

    const newSavePercent = parseFloat(previousSaveInput) + parseFloat(currentSave);

    const saveBalance = parseFloat(newSavePercent) / 100 * parseFloat(income);


    //value Set in Saing Amount
    savingAmount.innerText = saveBalance;

    if(Balance < saveBalance){

        savingsError();

    }
    else{
       
      //calculation for Remining Amount

    
     
    const remAmount = parseFloat(Balance) - parseFloat(saveBalance);

    const bal = document.getElementById('Rem-balance');

 //value Set in Saing remining Balance

    bal.innerText =remAmount;

    failNotify.style.display = 'none';
    negativeNotify.style.display = 'none';
    moneyEfficiency.style.display = 'none';
    }

     
 }
    
  

};
document.getElementById('save-btn').addEventListener('click',function(){
    
finalEquation();


    
});