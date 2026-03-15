function newHome(flowerType, flowerCount, budget) {
    let pricePerFlower = 0;

    switch (flowerType) {
        case "Roses":
            pricePerFlower = 5;
            break;
        case "Dahlias":
            pricePerFlower = 3.80;
            break;
        case "Tulips":
            pricePerFlower = 2.80;
            break;
        case "Narcissus":
            pricePerFlower = 3;
            break;
        case "Gladiolus":
            pricePerFlower = 2.50;
            break;
    }

    let totalPrice = flowerCount * pricePerFlower;

    // Apply discounts or surcharges
    if (flowerType === "Roses" && flowerCount > 80) {
        totalPrice *= 0.90; // 10% discount
    } else if (flowerType === "Dahlias" && flowerCount > 90) {
        totalPrice *= 0.85; // 15% discount
    } else if (flowerType === "Tulips" && flowerCount > 80) {
        totalPrice *= 0.85; // 15% discount
    } else if (flowerType === "Narcissus" && flowerCount < 120) {
        totalPrice *= 1.15; // 15% surcharge
    } else if (flowerType === "Gladiolus" && flowerCount < 80) {
        totalPrice *= 1.20; // 20% surcharge
    }

    let difference = Math.abs(budget - totalPrice).toFixed(2);

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${difference} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference} leva more.`);
    }
}

newHome()