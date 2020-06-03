"use strict";

function binary_search(data,target,low,high){

    if(low>high){
        return false;
    }else{
        let mid = Number.parseInt((low+high)/2);

        if(target==data[mid]){
            return true;
        }else if(target<data[mid]){
            return binary_search(data,target,low,mid-1);
        }else{
            return binary_search(data,target,mid+1,high);
        }

    }

}

console.log(binary_search([1,2,3,4,5],0,0,5));