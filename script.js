import {ElementManager} from './ElementManager.js';
import {TransitionHolder} from './TransitionHolder.js';
import {gradualLoad} from './Transitions.js';

var exampleFunction = function(){
    console.log("success");
}


window.onload = function(){
    console.log("hello");
    var example1 = document.getElementById('sample1');
    console.log(example1);
    var TransitionExample1 = gradualLoad(example1, 10);
    TransitionExample1.activateForwardTransition();
}