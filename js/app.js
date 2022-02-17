
//Function for calculator Button
 function generalEquation(){
     //Declare Value
    const income = document.getElementById('income-input').value;

    const foodInput = document.getElementById('food-input').value;
    
    const rentInput = document.getElementById('rent-input').value;
    
    const clothesInput = document.getElementById('colthes-input').value;

    const expenses = document.getElementById('total-expense');
    let allThreeExpense = expenses.innerText;

    //Declare for eroor handeling

    const failNotify = document.getElementById('notify-fail');
    const negativeNotify = document.getElementById('negative-value');

    //Calculation For Total Expense

    //Error Handeling part
    if (isNaN(foodInput) ) {

        failNotify.style.display = 'block';
        negativeNotify.style.display = 'none';

        
    }

    else if(foodInput<0){
        negativeNotify.style.display = 'block';
        failNotify.style.display = 'none';

    }
    else if(isNaN(rentInput)){
        failNotify.style.display = 'block';
        negativeNotify.style.display = 'none';
    }
    else if(rentInput<0){
        negativeNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }

    else if (isNaN(clothesInput)) {
        failNotify.style.display = 'block';
        negativeNotify.style.display = 'none';
    }

    else if(clothesInput<0){
        negativeNotify.style.display = 'block';
        failNotify.style.display = 'none';
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

 if (isNaN(income)){

        failNotify.style.display = 'block';
        negativeNotify.style.display = 'none';
        
    }
    else if(income < 0){
        negativeNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }

    else if(isNaN(previousSaveInput)){
        failNotify.style.display = 'block';
        negativeNotify.style.display = 'none';
    }
    else if(previousSaveInput < 0){
        negativeNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }

 else{
        //calculation for saving Amount

    const newSavePercent = parseFloat(previousSaveInput) + parseFloat(currentSave);

    const saveBalance = parseFloat(newSavePercent) / 100 * parseFloat(income);

    //value Set in Saing Amount

    savingAmount.innerText = saveBalance; 

     //calculation for Remining Amount

    const Balance = document.getElementById('total').innerText;
     
    const remAmount = parseFloat(Balance) - parseFloat(saveBalance);

    const bal = document.getElementById('Rem-balance');

 //value Set in Saing remining Balance

    bal.innerText =remAmount;

    failNotify.style.display = 'none';
    negativeNotify.style.display = 'none';
 }
    
  

}
document.getElementById('save-btn').addEventListener('click',function(){
    
finalEquation();


    
});