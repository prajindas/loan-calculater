//add event
document.getElementById('loan-form').addEventListener('submit', function(e){

    //show result
    document.getElementById('result').style.display='none';

      //show loader
      document.getElementById('loading').style.display='block';

    //calculate result
    setTimeout(calculateResult, 2000)

    e.preventDefault();
});

//calculate result

function calculateResult(){
    const amount= document.getElementById('amount');
    const interest =document.getElementById('interest')
    const year =document.getElementById('year')
    const monthlyPayment =document.getElementById('monthly-payment')
    const totalPayment =document.getElementById('total-payment')
    const totalInterest =document.getElementById('total-interest')

    const principal= parseFloat(amount.value);
    const calculatedInterest =parseFloat(interest.value) / 100 /12;
    const calculatedpayment =parseFloat(year.value) * 12;

    //compute monthlu payment
    x=Math.pow(1 + calculatedInterest, calculatedpayment);
    monthly =(principal*x*calculatedInterest) / (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value= monthly.toFixed(2);
        totalPayment.value =(monthly * calculatedpayment).toFixed(2);
        totalInterest.value=((monthly * calculatedpayment) - principal).toFixed(2)

        //hide loader
        document.getElementById('loading').style.display='none';

        //show result
        document.getElementById('result').style.display='block';

    }else{
        // show error
        showError('please check your Number')
    }
}

//error function

function showError(error){
    const errorDiv =document.createElement('div')
    //hide loader
    document.getElementById('loading').style.display='none';

    //show result
    document.getElementById('result').style.display='none';


    //get element

    const card =document.querySelector('.card');
    const heading =document.querySelector('.heading');

    //add class
    errorDiv.className ='alert alert-danger'

    //create text node
    errorDiv.appendChild(document.createTextNode(error))
    
    card.insertBefore(errorDiv, heading)

    //clear error after 3 second
    setTimeout(clearError, 3000);
}

//clear function

function clearError(){
    document.querySelector('.alert').remove()
}