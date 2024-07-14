function monthlySavings(allPayments, livingCost){
    if(!Array.isArray(allPayments) || typeof livingCost !== 'number'){
        return ('invalid input')
     }
    let totalCost = 0;
    let totalTax = 0;
    for(let allPayment of allPayments){
        if(typeof allPayment !== 'number'){
            return ('invalid input')
        }
        else{
            totalCost += allPayment;
        };

        if(allPayment >= 3000){
            let tax = allPayment * 0.2;
            totalTax += tax;
            
        }
    }
    const inTotalCost = totalCost - totalTax -livingCost;
    if(inTotalCost < 0){
        return ('earn More')
    }
   return inTotalCost

    
};

const cost = [1000, 2000, 3000];
const number = 5400;

const result = monthlySavings(cost, number)
console.log(result)