import { Correlation } from "./utils/Correlation.js";
import JOURNAL from "./utils/JOURNAL.js";
const correlation = new Correlation(JOURNAL);
correlation.getCorrelation();
JOURNAL.map((entry, index) => {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        correlation.addEvent("peanut teeth", index);
    }
});
correlation.getEventCorrelation("peanut teeth");
