for (let index = 10; index < 100; index++) {
    if (index ===+index.toString().split('').reverse().join('')) {
        console.log(index);
    }
}

