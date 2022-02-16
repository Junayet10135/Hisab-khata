
//Function for calculator Button
 function generalEquation(){
     //Declare Value
    const income = document.getElementById('income-input').value;

    const foodInput = document.getElementById('food-input').value;
    
    const rentInput = document.getElementById('rent-input').value;
    
    const clothesInput = document.getElementById('colthes-input').value;

    //Calculation For Total Expense

    const totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    
    const expenses = document.getElementById('total-expense');
    let allThreeExpense = expenses.innerText;
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
    
  

}
document.getElementById('save-btn').addEventListener('click',function(){
    
finalEquation();


    
})