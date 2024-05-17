function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;
  for (let product in products) {
    totalQuantity += products[product];
  }

  return totalQuantity <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 10));
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 5));
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 6));
console.log(isEnoughCapacity({ apples: 2, grapes: 4, bananas: 1 }, 7));
console.log(isEnoughCapacity({ apples: 2, grapes: 4, bananas: 2 }, 7));
