
function sol19() {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currentDay = 1;
    let sundays = 0;
    for (let year = 1900; year <= 2000; year++) {
        months[1] = 28 + (year % 4 === 0 && (year % 100 !== 0 && year % 400 === 0));
        console.log(months[1])
        for (month of months) {
            currentDay += month % 7;
            if (year === 1900) { months[1] = 28; continue; }
            currentDay % 7 === 0 ? sundays++ : null;
        }
    }
    return sundays;
}

console.log(sol19())