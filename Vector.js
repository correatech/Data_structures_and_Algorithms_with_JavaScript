"use strict";

function Vector(n){

    this.coords = new Array(n);

    this.length = function(){
        return this.coords.length;
    }

    this.getComponent = function(index){
        return this.coords[index];
    }

    this.setComponent = function(index,value){
        this.coords[index] = value;
    }

    this.getVector = function(){
        return this.coords;
    }

    this.sum = function(other){

        const result = [];

        for(let i = 0; i<this.length() && i<other.length(); i++){
            result[i] = this.getComponent(i)+other.getComponent(i);
        }

        return result;

    }

    this.values = function*(){
        let i = 0;
        while(i<this.length()){
            yield this.getComponent(i);
            i++;
        }
    }

    this[Symbol.iterator] = function(){
        return this.values();
    }

}