export class StringCalculator {
  public add(numbers: string): number {
    if (numbers.length == 0) {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers, 10);
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    numbers = numbers.replace(/\n/g, delimiter);
    const numArray = this.splitStringNumberstoIntegers(numbers, delimiter);
    const negativeNumbers = numArray.filter((num) => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
  }

  private splitStringNumberstoIntegers(
    numbers: string,
    delimiter: string
  ): number[] {
    return numbers.split(delimiter).map((num) => parseInt(num, 10));
  }
}
