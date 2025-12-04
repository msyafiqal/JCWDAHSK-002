function selectionSort(arr) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        max = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        if (max !== i) {
            var temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
