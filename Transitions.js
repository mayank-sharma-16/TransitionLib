import {TransitionHolder} from './TransitionHolder.js';

export function gradualLoad(element, time, op=0){

    console.log('gradualLoad');

    var forward = function(element, op, time) {
        var timer = setInterval(function () {
    
            if (op >= 1){
                clearInterval(timer);
            }
    
            element.style.opacity = op;
    
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    
            op += 0.005;
    
        }, time);  
    };

    var backward = function(element, op, time) {
        var timer = setInterval(function () {
    
            if (op <=0.05){
                element.style.opacity = 0;
                clearInterval(timer);
            }
    
            element.style.opacity = op;
    
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    
            op -= 0.005;
    
        }, time);  
    };
    
    return new TransitionHolder(forward, backward, element, op, time);

}