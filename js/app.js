
 function generalEquation(){
    const income = document.getElementById('income-input').value;

    const foodInput = document.getElementById('food-input').value;
    
    const rentInput = document.getElementById('rent-input').value;
    
    const clothesInput = document.getElementById('colthes-input').value;

    const totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    
    const expense = document.getElementById('total-expense');
    let ffExpense = expense.innerText;
    const finalTotalEx = parseFloat(ffExpense) + parseFloat(totalExpense);
    expense.innerText = finalTotalEx;

    const inputBalance = document.getElementById('total');
   const hhh = inputBalance.innerText;

   const haha = parseFloat(income)+ parseFloat(hhh);

  const hahaha = parseFloat(haha) - parseFloat(finalTotalEx);

inputBalance.innerText =hahaha;
    

    

} 

document.getElementById('calc-btn').addEventListener('click',function(){
    


    generalEquation();
  


    
})