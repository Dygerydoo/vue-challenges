var setDate = new Date(),
    locale = "es-ES",
    dateOptions = { weekday: 'long', month: 'long', day: 'numeric' }
    readableDate = setDate.toLocaleDateString(locale, dateOptions);

var todayDate = readableDate.charAt(0).toUpperCase() + readableDate.slice(1);