function exelSheetColumn(column) {
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var power = column.length - 1;
    var res = 0;
    for (var i = 0; i < column.length; i++) {
        var findNum = 0;
        for (var j = 0; j < abc.length; j++) {
            if (abc[j] == column[i]) {
                findNum = j + 1;
                break;
            }
        }
        var subtotal = findNum * (Math.pow(26, power));
        res += subtotal;
        power--;
    }
    return res;
}
console.log(exelSheetColumn("A")); // 1
console.log(exelSheetColumn("B")); // 2
console.log(exelSheetColumn("AA")); // 27
console.log(exelSheetColumn("ZZ")); //702
console.log(exelSheetColumn("AB")); //
console.log(exelSheetColumn("ABC")); //
