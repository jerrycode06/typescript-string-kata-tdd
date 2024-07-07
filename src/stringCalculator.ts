export class StringCalculator {
  public add(numbers: string): number {
    if (numbers.length == 0) {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers, 10);
    }

    const { delimiter, sanitizedNumbers } =
      this.extractDelimiterAndNumbers(numbers);
    const numArray = this.splitStringNumberstoIntegers(
      sanitizedNumbers,
      delimiter
    );

    this.throwIfNegativeNumbers(numArray);

    return this.sumNumbers(numArray);
  }

  private extractDelimiterAndNumbers(numbers: string): {
    delimiter: string;
    sanitizedNumbers: string;
  } {
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const sanitizedNumbers = numbers.replace(/\n/g, delimiter);
    return { delimiter, sanitizedNumbers };
  }

  private splitStringNumberstoIntegers(
    numbers: string,
    delimiter: string
  ): number[] {
    return numbers.split(delimiter).map((num) => parseInt(num, 10));
  }

  private throwIfNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }
  }

  private sumNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
