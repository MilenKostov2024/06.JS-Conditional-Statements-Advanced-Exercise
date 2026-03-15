function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {
    // Преобразуваме часа и минутите в минути от полунощ
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    let diff = arrivalTime - examTime;

    // Определяне на състоянието
    if (diff > 0) {
        console.log("Late");
    } else if (diff >= -30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    // Ако има разлика, форматираме резултата
    if (diff !== 0) {
        let absDiff = Math.abs(diff);
        if (absDiff < 60) {
            if (diff < 0) {
                console.log(`${absDiff} minutes before the start`);
            } else {
                console.log(`${absDiff} minutes after the start`);
            }
        } else {
            let hours = Math.floor(absDiff / 60);
            let minutes = absDiff % 60;
            let formattedMinutes = minutes.toString().padStart(2, "0");
            if (diff < 0) {
                console.log(`${hours}:${formattedMinutes} hours before the start`);
            } else {
                console.log(`${hours}:${formattedMinutes} hours after the start`);
            }
        }
    }
}

examArrival()