function bestClosingTime(customers: string): number {
    let penalty = 0;
    let minPenaltyIndex = customers.length;

    for (let i = 0; i <  customers.length; i++) {
      if (customers[i] === 'N') {
        penalty++;
      }
    }

    let minPenalty = penalty;

    for (let i = customers.length - 1; i >= 0; i--) {        
        penalty = customers[i] === 'N' ? penalty - 1 : penalty + 1;

        if (penalty <= minPenalty) {
            minPenalty = penalty;
            minPenaltyIndex = i;
        }
    }

    return minPenaltyIndex;
};
