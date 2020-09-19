function calculateSum(a,b) {
    return a+b;
}

function calculateSub(a,b) {
    return a-b;
}

function calculateSubB(a,b) {
    return b-a;
}

function calculateMult(a,b) {
    return a*b;
}

function calculateDividerA(a,b) {
    if (b === 0) {
        return 'Divisão por 0'
    } else {
        return a/b;
    }
} 

function calculateDividerB(a,b) {
    if (a === 0) {
        return 'Divisão por 0'
    } else {
        return b/a;
    }
} 

function eleveteeA(a) {
    return a*a;
}

function eleveteeB(b) {
    return b*b;
}

function divisoresDeA(a) {
   let array = [];
   for(let i=1; i<=a; i++) {
       if (a%i ===0) {
           array.push(i);
       }
   }
   return `[${array}] (${array.length})`;
}

function divisoresDeB(b) {
    let array = [];
    for(let i=1; i<=b; i++) {
        if (b%i ===0) {
            array.push(i);
        }
    }
    return `[${array}] (${array.length})`;
 }

 function fatorialDeA(a) {
     if (a > 21) {
         return 'Número muito grande'
     }
     let total = 1;
     for(let i=1;i<=a;i++) {
        total *= i;
     }

     return total;
 }

 function fatorialDeB(b) {
    if (b > 21) {
        return 'Número muito grande'
    }
    let total = 1;
     for(let i=1;i<=b;i++) {
        total *= i;
     }

     return total;
}

function calculate(as) {
    console.log(as);
    const a = parseInt(document.getElementsByClassName("valueA")[0].value,10);
    const b = parseInt(document.getElementsByClassName("valueB")[0].value,10);
    
    const sum = calculateSum(a,b)
    const sub = calculateSub(a,b)
    const subB = calculateSubB(a,b)
    const mult = calculateMult(a,b);
    const dividerA = calculateDividerA(a,b);
    const dividerB = calculateDividerB(a,b);
    const eleveteA = eleveteeA(a);
    const eleveteB = eleveteeB(b);
    const divisorA = divisoresDeA(a);
    const divisorB = divisoresDeB(b);
    const fatorialA = fatorialDeA(a);
    const fatorialB = fatorialDeB(b);

    const sumLabel = document.getElementsByClassName('sumA')[0];
    const subLabel = document.getElementsByClassName('subA')[0];
    const subLabelB = document.getElementsByClassName('subB')[0];
    const multLabel = document.getElementsByClassName('multi')[0];
    const dividerLabelA = document.getElementsByClassName('dividerA')[0];
    const dividerLabelB = document.getElementsByClassName('dividerB')[0];
    const eleveteLabelA = document.getElementsByClassName('elevateA')[0];
    const eleveteLabelB = document.getElementsByClassName('elevateB')[0];
    const divisorLabelA = document.getElementsByClassName('divisoresA')[0];
    const divisorLabelB = document.getElementsByClassName('divisoresB')[0];
    const fatorialDeALabel = document.getElementsByClassName('fatorialA')[0];
    const fatorialDeBLabel = document.getElementsByClassName('fatorialB')[0];

    sumLabel.textContent = sum;
    subLabel.textContent = sub;
    subLabelB.textContent = subB;
    multLabel.textContent = mult;
    dividerLabelA.textContent = dividerA;
    dividerLabelB.textContent = dividerB;
    eleveteLabelA.textContent = eleveteA;
    eleveteLabelB.textContent = eleveteB;
    divisorLabelA.textContent = divisorA;
    divisorLabelB.textContent = divisorB;
    fatorialDeALabel.textContent = fatorialA;
    fatorialDeBLabel.textContent = fatorialB;
}


function clean() {
    document.getElementsByClassName('sumA')[0].textContent = '';
    document.getElementsByClassName('subA')[0].textContent = '';
    document.getElementsByClassName('subB')[0].textContent = '';
    document.getElementsByClassName('multi')[0].textContent = '';
    document.getElementsByClassName('dividerA')[0].textContent = '';
    document.getElementsByClassName('dividerB')[0].textContent = '';
    document.getElementsByClassName('elevateA')[0].textContent = '';
    document.getElementsByClassName('elevateB')[0].textContent = '';
    document.getElementsByClassName('divisoresA')[0].textContent = '';
    document.getElementsByClassName('divisoresB')[0].textContent = '';
    document.getElementsByClassName('fatorialA')[0].textContent = '';
    document.getElementsByClassName('fatorialB')[0].textContent = '';
    
}