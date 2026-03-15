function fishingBoat(budget, season, fishermen) {
    let rent = 0;

    // Определяне на базовата цена според сезона
    switch (season) {
        case "Spring":
            rent = 3000;
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;
            break;
        case "Winter":
            rent = 2600;
            break;
    }

    // Отстъпка според броя на рибарите
    if (fishermen <= 6) {
        rent *= 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        rent *= 0.85;
    } else if (fishermen >= 12) {
        rent *= 0.75;
    }

    // Допълнителна 5% отстъпка при четен брой рибари, освен през есента
    if (fishermen % 2 === 0 && season !== "Autumn") {
        rent *= 0.95;
    }

    const difference = Math.abs(budget - rent).toFixed(2);

    if (budget >= rent) {
        console.log(`Yes! You have ${difference} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference} leva.`);
    }
}

fishingBoat()