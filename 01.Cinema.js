function cinema(type, rows, cols) {
    let income = 0;

    if (type === 'Premiere') {
        income = rows * cols * 12;
    } else if (type === 'Normal') {
        income = rows * cols * 7.5;
    } else if (type === 'Discount') {
        income = rows * cols * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema()