function differenceMinMax(array) {
    var max = 0; 
    var min = 1000;
    for (i = 0; i < array.length; i++) {
      var x = array[i];
      console.log("X: "+ x);
      if (x > max) {max = x; console.log("new Max: " + max);}
      if (x < min) {min = x; console.log("new min: " + min);}
    }
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("max - min: " + (max - min));
    return max - min; 
  }
  

  

var array1 = [10, 4, 60];
var array2 = [-50, 2, 11];

differenceMinMax(array1);
console.log("################");
differenceMinMax(array2);
