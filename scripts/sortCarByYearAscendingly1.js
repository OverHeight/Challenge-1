function sortCarByYearAscendingly(cars) {
    console.log(cars);

    
    for(var i; i < cars.length - 1;i++) { 
        for(var j; j < cars.length - 1 - i;j++) {
            if(cars[j].year > cars[j + 1].year) {
                var temp = cars[j];
                cars[j] = cars[j + 1];
                cars[j + 1] = temp;
            };
        }
    }
    const result = [...cars];
    return result;
}