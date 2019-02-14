"use strict";
{
    let userPosition = 0;
    let direction = 'positive';

    function moveForward(num) {
        if (direction === 'positive') {
            userPosition += num;
        } else userPosition -= num;
        
    }

    function moveBackward(num) {
        if (direction === 'positive') {
            userPosition -= num;
        } else userPosition += num;
        
    }

    function turnAround() {
        if (direction === 'positive') {
            direction = 'negative';
        } else direction = 'positive';

    }

    function printLocation() {
        console.log(userPosition);

    }

    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();



}