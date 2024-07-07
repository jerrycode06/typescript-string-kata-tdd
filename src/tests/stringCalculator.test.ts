import { StringCalculator } from "../stringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself if only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
    expect(calculator.add("4,5,6,7")).toBe(22);
    expect(calculator.add("10,20,30,40,50")).toBe(150);
  });

  test("should return the sum of numbers separated by new lines", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("4\n5\n6")).toBe(15);
    expect(calculator.add("7,8\n9")).toBe(24);
  });

  test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n2|3|4")).toBe(9);
    expect(calculator.add("//sep\n2sep3sep4")).toBe(9);
  });
});
