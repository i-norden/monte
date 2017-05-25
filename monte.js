/* monteCarlo method of solving the average of three numbers. NOTE: this could very easily be changed to approximate the average of different probability distriubtions*/
var upperRandom = 0;
var midRandom = 0;
var botRandom = 0;

var randomSample = function(loop, upper, mid, bot) {
    for (i = 0; i < loop; i++) {
     upperRandom += Math.random() * 10 + upper - 5;
     midRandom += Math.random() * 10 + mid - 5;
     botRandom += Math.random() * 10 + bot - 5;
    }
    var randomAverage = function() {
        console.log("hey");
     upperAve = upperRandom / loop;
     midAve = midRandom / loop;
     botAve = botRandom / loop;
     var loop3 = loop * 3;
     average = (upperRandom + midRandom + botRandom) / loop3;
     console.log(average);
    }
    randomAverage()
}

randomSample(100000, 100.1, 87.25, 11.84);




/* a different approach which is closer to estimating averages of prob distributions*/

var random = 0;

var randomSample = function(loop, upper, mid, bot) {
    for (i = 0; i < loop; i++) {
      var roll = Math.random();
      if (roll <= 0.333334) {
      random += Math.random() * 10 + upper - 5;
      } else if (roll >= 0.333334 && roll <= 0.666667) {
      random += Math.random() * 10 + mid - 5;
      } else {
      random += Math.random() * 10 + bot - 5;
      }
    }
    average = random / loop;
    console.log(average);
}

randomSample(100000, 100.1, 87.25, 11.84);




/*monteCarlo to find value of e*/

function trial() {
    var count = 0, sum = 0;
    while (sum <= 1) {
        sum += Math.random();
        count++;
    }
    return count;
}

function monteCarlo(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
        total += trial();
    }
    return total / n;
}

monteCarlo(30000);
