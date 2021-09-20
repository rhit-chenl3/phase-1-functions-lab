// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42);
  }
  
  function distanceFromHqInFeet(someValue) {
    const newValue = distanceFromHqInBlocks(someValue);
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return newValue * 264;
  }

  function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(startingBlock - endingBlock) * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distanceFeet = distanceTravelledInFeet(start, destination);
    if (distanceFeet <= 400){
        return 0;
    } else if(distanceFeet <= 2000){
        return 0.02 * (distanceFeet - 400);
    } else if (distanceFeet <= 2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
  }