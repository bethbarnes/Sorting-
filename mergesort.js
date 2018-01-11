function mergeSort (arr){
  if (arr.length < 2){
    return arr;
  } else {
    var midPoint = Math.floor(arr.length/2);
    var arr1 = arr.slice(0, midPoint);
    var arr2 = arr.slice(midPoint);
    return merge(mergeSort(arr1), mergeSort(arr2)) ;
  }
}

function merge(arr1, arr2){
  var i = 0;
  var j = 0;
  var sortedArray = [];
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }
  return sortedArray.concat(arr1.slice(i).concat(arr2.slice(j)));
};
