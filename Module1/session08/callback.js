function calculator(a, b, cb) {
    var result = a + b;
    return cb(a + b);
}
function displayer(num) {
    return num;
}
var res = calculator(5, 6, displayer);
console.log(calculator(5, 6, displayer));
var products = [
    { name: "abc", price: 10000 },
    { name: "def", price: 20000 }
];
var money = 1000000;
function shopping(product, money, cb) {
    console.log(product === null || product === void 0 ? void 0 : product.name, "dibeli dengan harga", product === null || product === void 0 ? void 0 : product.price);
    console.log("uang anda", money);
    cb(money - (product === null || product === void 0 ? void 0 : product.price));
}
shopping(products[0], money, function (changes) {
    console.log("kembalian anda :", changes);
    console.log("=========================");
    shopping(products[1], changes, function (changes) {
        console.log("kembalian anda :", changes);
        console.log("=========================");
        shopping(products[1], changes, function (changes) {
            console.log("kembalian anda :", changes);
            console.log("=========================");
            shopping(products[1], changes, function (changes) {
                console.log("kembalian anda :", changes);
                console.log("=========================");
                shopping(products[1], changes, function (changes) {
                    console.log("kembalian anda :", changes);
                    console.log("=========================");
                    shopping(products[1], changes, function (changes) {
                        console.log("kembalian anda :", changes);
                        console.log("=========================");
                        shopping(products[1], changes, function (changes) {
                            console.log("kembalian anda :", changes);
                            console.log("=========================");
                            shopping(products[1], changes, function (changes) {
                                console.log("kembalian anda :", changes);
                                console.log("=========================");
                                shopping(products[1], changes, function (changes) {
                                    console.log("kembalian anda :", changes);
                                    console.log("=========================");
                                    shopping(products[1], changes, function (changes) {
                                        console.log("kembalian anda :", changes);
                                        console.log;
                                        shopping(products[1], changes, function (changes) {
                                            console.log("kembalian anda :", changes);
                                            console.log("=========================");
                                            shopping(products[1], changes, function (changes) {
                                                console.log("kembalian anda :", changes);
                                                console.log("=========================");
                                                shopping(products[1], changes, function (changes) {
                                                    console.log("kembalian anda :", changes);
                                                    console.log("=========================");
                                                    shopping(products[1], changes, function (changes) {
                                                        console.log("kembalian anda :", changes);
                                                        console.log("=========================");
                                                        shopping(products[1], changes, function (changes) {
                                                            console.log("kembalian anda :", changes);
                                                            console.log("=========================");
                                                            shopping(products[1], changes, function (changes) {
                                                                console.log("kembalian anda :", changes);
                                                                console.log("=========================");
                                                                shopping(products[1], changes, function (changes) {
                                                                    console.log("kembalian anda :", changes);
                                                                    console.log("=========================");
                                                                    shopping(products[1], changes, function (changes) {
                                                                        console.log("kembalian anda :", changes);
                                                                        console.log("=========================", shopping(products[1], changes, function (changes) {
                                                                            console.log("kembalian anda :", changes);
                                                                            console.log("=========================");
                                                                            shopping(products[1], changes, function (changes) {
                                                                                console.log("kembalian anda :", changes);
                                                                                console.log("=========================");
                                                                                shopping(products[1], changes, function (changes) {
                                                                                    console.log("kembalian anda :", changes);
                                                                                    console.log("=========================");
                                                                                    shopping(products[1], changes, function (changes) {
                                                                                        console.log("kembalian anda :", changes);
                                                                                        console.log("=========================");
                                                                                        shopping(products[1], changes, function (changes) {
                                                                                            console.log("kembalian anda :", changes);
                                                                                            console.log("=========================");
                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                console.log("kembalian anda :", changes);
                                                                                                console.log("=========================");
                                                                                                shopping(products[1], changes, function (changes) {
                                                                                                    console.log("kembalian anda :", changes);
                                                                                                    console.log("=========================");
                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                        console.log("kembalian anda :", changes);
                                                                                                        console.log("=========================");
                                                                                                        shopping(products[0], money, function (changes) {
                                                                                                            console.log("kembalian anda :", changes);
                                                                                                            console.log("=========================");
                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                console.log("=========================");
                                                                                                                shopping(products[1], changes, function (changes) {
                                                                                                                    console.log("kembalian anda :", changes);
                                                                                                                    console.log("=========================");
                                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                                        console.log("kembalian anda :", changes);
                                                                                                                        console.log("=========================");
                                                                                                                        shopping(products[1], changes, function (changes) {
                                                                                                                            console.log("kembalian anda :", changes);
                                                                                                                            console.log("=========================");
                                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                                console.log("=========================");
                                                                                                                                shopping(products[1], changes, function (changes) {
                                                                                                                                    console.log("kembalian anda :", changes);
                                                                                                                                    console.log("=========================");
                                                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                                                        console.log("kembalian anda :", changes);
                                                                                                                                        console.log("=========================");
                                                                                                                                        shopping(products[1], changes, function (changes) {
                                                                                                                                            console.log("kembalian anda :", changes);
                                                                                                                                            console.log("=========================");
                                                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                                                console.log;
                                                                                                                                                shopping(products[1], changes, function (changes) {
                                                                                                                                                    console.log("kembalian anda :", changes);
                                                                                                                                                    console.log("=========================");
                                                                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                                                                        console.log("kembalian anda :", changes);
                                                                                                                                                        console.log("=========================");
                                                                                                                                                        shopping(products[1], changes, function (changes) {
                                                                                                                                                            console.log("kembalian anda :", changes);
                                                                                                                                                            console.log("=========================");
                                                                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                                                                console.log("=========================");
                                                                                                                                                                shopping(products[1], changes, function (changes) {
                                                                                                                                                                    console.log("kembalian anda :", changes);
                                                                                                                                                                    console.log("=========================");
                                                                                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                                                                                        console.log("kembalian anda :", changes);
                                                                                                                                                                        console.log("=========================");
                                                                                                                                                                        shopping(products[1], changes, function (changes) {
                                                                                                                                                                            console.log("kembalian anda :", changes);
                                                                                                                                                                            console.log("=========================");
                                                                                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                                                                                console.log("=========================", shopping(products[1], changes, function (changes) {
                                                                                                                                                                                    console.log("kembalian anda :", changes);
                                                                                                                                                                                    console.log("=========================");
                                                                                                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                                                                                                        console.log("kembalian anda :", changes);
                                                                                                                                                                                        console.log("=========================");
                                                                                                                                                                                        shopping(products[1], changes, function (changes) {
                                                                                                                                                                                            console.log("kembalian anda :", changes);
                                                                                                                                                                                            console.log("=========================");
                                                                                                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                                                                                                console.log("=========================");
                                                                                                                                                                                                shopping(products[1], changes, function (changes) {
                                                                                                                                                                                                    console.log("kembalian anda :", changes);
                                                                                                                                                                                                    console.log("=========================");
                                                                                                                                                                                                    shopping(products[1], changes, function (changes) {
                                                                                                                                                                                                        console.log("kembalian anda :", changes);
                                                                                                                                                                                                        console.log("=========================");
                                                                                                                                                                                                        shopping(products[1], changes, function (changes) {
                                                                                                                                                                                                            console.log("kembalian anda :", changes);
                                                                                                                                                                                                            console.log("=========================");
                                                                                                                                                                                                            shopping(products[1], changes, function (changes) {
                                                                                                                                                                                                                console.log("kembalian anda :", changes);
                                                                                                                                                                                                                console.log("=========================");
                                                                                                                                                                                                            });
                                                                                                                                                                                                        });
                                                                                                                                                                                                    });
                                                                                                                                                                                                });
                                                                                                                                                                                            });
                                                                                                                                                                                        });
                                                                                                                                                                                    });
                                                                                                                                                                                }));
                                                                                                                                                                            });
                                                                                                                                                                        });
                                                                                                                                                                    });
                                                                                                                                                                });
                                                                                                                                                            });
                                                                                                                                                        });
                                                                                                                                                    });
                                                                                                                                                });
                                                                                                                                            });
                                                                                                                                        });
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        }));
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
