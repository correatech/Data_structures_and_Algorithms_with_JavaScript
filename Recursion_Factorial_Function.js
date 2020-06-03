"use strict";

function factorial(n){

    console.log(n);

    if(n==0){
        //base case
        return 1;
    }
    else{
        //recursive case
        return n * factorial(n-1);
    }


}

factorial(10);