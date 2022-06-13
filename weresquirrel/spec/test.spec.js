import { addEntry, journalEvents } from "../dist/utils/correlation.js";
import JOURNAL from "../dist/utils/JOURNAL.js";

describe("addEntry(events, squirrel)", () => {
  it("events = ['pizza', 'peanut', 'brush teeth'], squirrel = false", () => {
    const result = addEntry(["pizza", "peanut", "brush teeth"], false).pop();
    expect(result).toEqual({
      events: ["pizza", "peanut", "brush teeth"],
      squirrel: false,
    });
  });
  it("events = ['penaut'], squirrel = true", () => {
    const result = addEntry(["pizza"], true).pop();
    expect(result).toEqual({ events: ["pizza"], squirrel: true });
  });
});

describe("journalEvents(journal)", () => {
  it("Journal = JOURNAL.JSON", () => {
    const result = journalEvents(JOURNAL);
    expect(result).toEqual([
      "carrot",
      "exercise",
      "weekend",
      "bread",
      "pudding",
      "brushed teeth",
      "touched tree",
      "nachos",
      "cycling",
      "brussel sprouts",
      "ice cream",
      "computer",
      "potatoes",
      "candy",
      "dentist",
      "running",
      "pizza",
      "work",
      "beer",
      "cauliflower",
      "lasagna",
      "lettuce",
      "television",
      "spaghetti",
      "reading",
      "peanuts",
    ]);
  });
});
