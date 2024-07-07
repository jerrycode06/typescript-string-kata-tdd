export class StringCalculator {
  public add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const sanitizedNumbers = numbers.replace(/\n/g, ",");
    const numArray = sanitizedNumbers
      .split(",")
      .map((num) => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
