function hotelRoom(month, nights) {
    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;

    // Определяне на базовите цени според месеца
    switch (month) {
        case "May":
        case "October":
            studioPricePerNight = 50;
            apartmentPricePerNight = 65;
            break;
        case "June":
        case "September":
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;
            break;
        case "July":
        case "August":
            studioPricePerNight = 76;
            apartmentPricePerNight = 77;
            break;
    }

    let studioTotal = studioPricePerNight * nights;
    let apartmentTotal = apartmentPricePerNight * nights;

    // Отстъпки за студио
    if ((month === "May" || month === "October") && nights > 14) {
        studioTotal *= 0.70; // 30% намаление
    } else if ((month === "May" || month === "October") && nights > 7) {
        studioTotal *= 0.95; // 5% намаление
    } else if ((month === "June" || month === "September") && nights > 14) {
        studioTotal *= 0.80; // 20% намаление
    }

    // Отстъпка за апартамент (винаги ако са над 14 нощувки)
    if (nights > 14) {
        apartmentTotal *= 0.90; // 10% намаление
    }

    // Извеждане на резултата
    console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}

hotelRoom()