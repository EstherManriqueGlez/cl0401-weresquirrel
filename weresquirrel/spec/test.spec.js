import { addEntry, journalEvents, phi, tableFor } from "../dist/utils/correlation.js";
import JOURNAL from "../dist/utils/JOURNAL.js";

describe("addEntry(events, squirrel)", () => {
  it("events = ['pizza', 'peanut', 'brush teeth'], squirrel = false", () => {
    const result = addEntry(["pizza", "peanut", "brush teeth"], false).pop();
    expect(result).toEqual({events: ["pizza", "peanut", "brush teeth"],
      squirrel: false,
    });
  });
  it("events = ['pizza'], squirrel = true", () => {
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
  // it('journal = undefined', () => {
  //   const result = journalEvents();
  //   expect(result).toEqual([]);
  // })
});

describe("phi([n00, n01, n10, n11]", () => {
  it("Two-by-two table = [0, 0, 0, 0]", () => {
    const result = phi([0, 0, 0, 0]);
    expect(result).toEqual(NaN);
  });
  it("Two-by-two table = [76, 9, 4, 1]", () => {
    const result = phi([76, 9, 4, 1]);
    expect(result).toEqual(0.06859943405700354);
  });
  it("Two-by-two table = [45, 14, 32, 5]", () => {
    const result = phi([45, 14, 32, 5]);
    expect(result).toEqual(-0.12478311766407547);
  });  
});

describe("tableFor(event, journal)", () => {
  it("event = 'peanuts'", () => {
    const result = tableFor('peanuts', JOURNAL);
    expect(result).toEqual([77, 8, 0, 5]);
  }); 
  it("event = 'pizza'", () => {
    const result = tableFor('pizza', JOURNAL);
    expect(result).toEqual([76, 9, 4, 1]);
  }); 
  it("event = 'brushed teeth'", () => {
    const result = tableFor('brushed teeth', JOURNAL);
    expect(result).toEqual([21, 64, 5, 0]);
  }); 
  it("event = ''", () => {
    const result = tableFor(undefined, JOURNAL);
    expect(result).toEqual([85, 0, 5, 0]);
  }); 
});
