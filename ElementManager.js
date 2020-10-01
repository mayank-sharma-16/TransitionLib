// ElementManager.js
//import { TransitionHolder } from 'TransitionHolder.js';

export class ElementManager {
    constructor(element){
        this.element = element;
        this.transitions = Array();
        this.iterator = 0;
    }

    get element() {
        return this.element;
    }

    get transitions() {
        return this.transitions;
    }

    get reverseTransitions() {
        return this.reverseTransitions;
    }

    makeTransition(forward_function, backward_function){
        return new TransitionHolder(forward_function, backward_function);
    }

    addTransitionToEnd(transition) {
        this.transitions.push(transition);
    }

    addTransitionToBeginning(transition){
        this.transitions.unshift(transition);
    }

    removeTransitionFromEnd(){
        return this.transitions.pop(transition);
    }

    removeTransitionFromBeginning(){
        return this.transitions.shift(transition);
    }

    activateTransition(transition){
        return transition.activateForwardTransition();
    }

    activateReverseTransition(transition){
        return transition.activateReverseTransition();
    }

    incrementIterator(){
        this.iterator += 1;
    }

    decrementIterator(){
        this.iterator -= 1;
    }

    moveForward(){
        var transition_to_activate = this.transitions[this.iterator];
        this.activateTransition(transition_to_activate);
        this.incrementIterator();
    }

    moveBackward(){
        var transition_to_activate = this.transitions[this.iterator];
        this.activateReverseTransition(transition_to_activate);
        this.decrementIterator();
    }

    completeRemainingTransitions(){
        for(this.iterator; this.iterator <= this.transitions.length; this.iterator++){
            this.moveForward();
        }
    }

    undoAllTransitions(){
        for(this.iterator; this.iterator >= 0; this.iterator--){
            this.moveBackward();
        }
    }

}


//. export {ElementManager};