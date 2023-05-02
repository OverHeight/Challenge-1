function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  
  // Tulis code-mu disini
  for (var i = 0; i < cars.length - 1; i++) {
    for (var j = 0; j < cars.length - i - 1; j++) {
      if (cars[j].year < cars[j + 1].year) {
        var temp = cars[j];
        cars[j] = cars[j + 1];
        cars[j + 1] = temp;
      }
    }
  }

  const result = [...cars];
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
