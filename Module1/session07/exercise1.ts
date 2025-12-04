function exelSheetColumn(column: string){
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let power = column.length - 1 
    let res = 0
    for (let i = 0; i < column.length; i++){
        let findNum = 0
        for(let j = 0; j < abc.length; j++){
            if(abc[j] == column[i]){
                findNum = j + 1
                break
            }
        }

        let subtotal = findNum * (26 ** power)
        res += subtotal
        power--
    }

    return res
}


console.log(exelSheetColumn("A")) // 1
console.log(exelSheetColumn("B")) // 2
console.log(exelSheetColumn("AA")) // 27
console.log(exelSheetColumn("ZZ")) //702
console.log(exelSheetColumn("AB")) //28
console.log(exelSheetColumn("ABC")) //731