function worries(str) {
    const phrases = [
        "Making last-minute changes",
        "Sitting in a dark room and shaking",
        "Crying",
        "Laughing hysterically",
        "Not eating",
    ];
    if (phrases.includes(str)) {
        return "Stop worrying, everything will be all right!";
    } else {
        return "Do you really care?";
    }
}
