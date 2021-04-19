import { stringToMilliseconds } from ".";

describe(stringToMilliseconds.name, () => {
  test("parses 0", () => {
    const actual = stringToMilliseconds("00:00:00.000");
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test("parses milliseconds", () => {
    const actual = stringToMilliseconds("00:00:00.600");
    const expected = 600;

    expect(actual).toEqual(expected);
  });

  test("parses seconds", () => {
    const actual = stringToMilliseconds("00:00:06.000");
    const expected = 6_000;

    expect(actual).toEqual(expected);
  });

  test("parses seconds and milliseconds", () => {
    const actual = stringToMilliseconds("00:00:24.567");
    const expected = 24_567;

    expect(actual).toEqual(expected);
  });

  test("parses minutes", () => {
    const actual = stringToMilliseconds("00:06:00.000");
    const expected = 360_000;

    expect(actual).toEqual(expected);
  });

  test("parses minutes and seconds", () => {
    const actual = stringToMilliseconds("00:02:00.100");
    const expected = 120_100;

    expect(actual).toEqual(expected);
  });

  test("parses minutes, seconds and milliseconds", () => {
    const actual = stringToMilliseconds("00:02:27.100");
    const expected = 147_100;

    expect(actual).toEqual(expected);
  });

  test("parses hours", () => {
    const actual = stringToMilliseconds("06:00:00.000");
    const expected = 21_600_000;

    expect(actual).toEqual(expected);
  });

  test("parses hours and minutes", () => {
    const actual = stringToMilliseconds("06:23:00.000");
    const expected = 22_980_000;

    expect(actual).toEqual(expected);
  });

  test("parses hours, minutes and seconds", () => {
    const actual = stringToMilliseconds("06:23:49.000");
    const expected = 23_029_000;

    expect(actual).toEqual(expected);
  });

  test("parses hours, minutes, seconds and milliseconds", () => {
    const actual = stringToMilliseconds("06:23:56.780");
    const expected = 23_036_780;

    expect(actual).toEqual(expected);
  });
});
