let answ = 'This webpage is still not functional';
let nof = 0;
function comp(){
    if(nof === 0){
        window.alert(answ)
    }
        if(nof === 1){
        window.alert('Please stop. ')
    }
    if(nof === 2){
        window.alert('Are you blind I said stop!')
    }
    if(nof > 2){
        window.alert("That is it.")
    }
    nof = nof + 1;
}