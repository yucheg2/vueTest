import { format } from "date-fns";

function word(value, words) {
    const value1 = Math.abs(value) % 100;
    const num = value1 % 10;
    if (value1 > 10 && value1 < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
}

export default function getTime(ms) {
    const diff = Date.now() - ms;
    let result;
    if (diff < 60 * 60000) {
        result =
            Math.ceil(diff / 60000) +
            " " +
            word(Math.ceil(diff / 60000), ["минуту", "минуты", "минут"]);
    } else if (diff < 24 * 60 * 60000) {
        result =
            Math.floor(diff / (60 * 60000)) +
            " " +
            word(Math.floor(diff / (60 * 60000)), ["час", "часа", "часов"]);
    } else {
        result = format(ms, "dd.MM.yyyy");
    }
    return result;
}
