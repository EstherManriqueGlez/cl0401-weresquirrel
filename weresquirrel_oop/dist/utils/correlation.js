class Correlation {
    constructor(journal) {
        this.journal = journal;
    }
    addEvent(event, index) {
        this.journal[index].events.push(event);
    }
    addEntry(events, squirrel) {
        this.journal.push({ events, squirrel });
        return this.journal;
    }
    phi([n00, n01, n10, n11]) {
        return ((n11 * n00 - n10 * n01) /
            Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10)));
    }
    tableFor(event) {
        let table = [0, 0, 0, 0];
        for (let entry of this.journal) {
            let index = 0;
            if (entry.events.includes(event))
                index += 1;
            if (entry.squirrel)
                index += 2;
            table[index] += 1;
        }
        return table;
    }
    journalEvents() {
        let events = [];
        for (let entry of this.journal)
            for (let event of entry.events)
                if (!events.includes(event))
                    events.push(event);
        return events;
    }
    getCorrelation() {
        for (let event of this.journalEvents()) {
            let correlation = this.phi(this.tableFor(event));
            if (correlation > 0.1 || correlation < -0.1) {
                console.log(event + ":", correlation);
            }
        }
    }
    getEventCorrelation(event) {
        console.log(this.phi(this.tableFor(event)));
    }
}
export { Correlation };
