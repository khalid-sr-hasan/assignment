function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number') {
        return console.log('please enter the right value');
    }

    const ticketPrice = 120 * ticketSale;
    const daroanFee = 500;
    const stafCost = 50 * 8;
    const totalStafCost = daroanFee + stafCost;

    const totalCost = ticketPrice - totalStafCost;
    return totalCost;

}

const cost = calculateMoney(10);
console.log(cost)