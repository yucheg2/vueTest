import { parseJSON, format } from "date-fns";

function isExpiress(date, time) {
    if (date && time) {
        return parseJSON(date + "T" + time + ":00+0300") < Date.now();
    }
    if (date) {
        return parseJSON(date + "T00:00:00+0300") < Date.now();
    }
}
export default isExpiress;
