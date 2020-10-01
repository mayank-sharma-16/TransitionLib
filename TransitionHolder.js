// TransitionHolder.js

var emptyFunction = function(){
    return;
}

class TransitionHolder {
    constructor(transitionFunction, reverseFunction=emptyFunction){
        this.transitionFunction = transitionFunction;
        this.reverseFunction = reverseFunction;
    }

    get transitionFunction(){
        return this.transitionFunction;
    }

    get reverseFunction(){
        return this.reverseFunction;
    }

    activateForwardTransition(){
        return this.transitionFunction();
    }

    activateReverseTransition(){
        return this.reverseFunction();
    }
    
}