// TransitionHolder.js

var emptyFunction = function(){
    return;
}

export class TransitionHolder {
    constructor(transitionFunction, reverseFunction=emptyFunction, ...transitionParameters){
        console.log("constructed");
        this.transitionFunction = transitionFunction;
        this.reverseFunction = reverseFunction;
        this.transitionParameters = transitionParameters;
    }

    getTransitionFunction(){
        return this.transitionFunction;
    }

    getReverseFunction(){
        return this.reverseFunction;
    }

    activateForwardTransition(){
        return this.transitionFunction(...this.transitionParameters);
    }

    activateReverseTransition(){
        return this.reverseFunction(...this.transitionParameters);
    }
    
}