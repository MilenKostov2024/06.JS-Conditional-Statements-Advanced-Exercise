function journey(budget, season) {
    let destination = "";
    let accommodation = "";
    let amountSpent = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            accommodation = "Camp";
            amountSpent = budget * 0.30;
        } else if (season === "winter") {
            accommodation = "Hotel";
            amountSpent = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            accommodation = "Camp";
            amountSpent = budget * 0.40;
        } else if (season === "winter") {
            accommodation = "Hotel";
            amountSpent = budget * 0.80;
        }
    } else {
        destination = "Europe";
        accommodation = "Hotel";
        amountSpent = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${amountSpent.toFixed(2)}`);
}

journey()