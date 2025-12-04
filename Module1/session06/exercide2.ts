class Product {
    private name: string = ""
    private price: number = 0

    setName(name: string) {
        if (name == "") {
            console.log("Name cannot be empty")
        }
    }
}



let product1 = new Product()
product1.setName = "NZXT Tower Matle Black"
Product.setPrice = 1500000
console.log(product1)

