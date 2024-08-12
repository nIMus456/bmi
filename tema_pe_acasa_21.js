const masaVadim = 78;
const inaltimeVadim = 1.69;
const masaAlex = 92;
const inaltimeAlex = 1.95; 
let bmiVadim;
let bmiAlex;

// BMI Vadim
bmiVadim = masaVadim / inaltimeVadim * 2;
console.log (bmiVadim);

// BMI Alex
bmiAlex = masaAlex / inaltimeAlex * 2;
console.log (bmiAlex);

var markHigherBMI = bmiVadim > bmiAlex;
console.log (markHigherBMI);
