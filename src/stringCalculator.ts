export class StringCalculator {
  private addCallCount: number = 0;

  public add(numbers: string): number {
    this.addCallCount++;

    if (numbers.length == 0) {
      return 0;
    }

    if (numbers.length < 2) {
      return parseInt(numbers, 10);
    }

    const { delimiters, sanitizedNumbers } =
      this.extractDelimiterAndNumbers(numbers);
    const numArray = this.splitStringNumberstoIntegers(
      sanitizedNumbers,
      delimiters
    );

    this.throwIfNegativeNumbers(numArray);

    return this.sumNumbers(numArray);
  }

  public getCalledCount(): number {
    return this.addCallCount;
  }

  private extractDelimiterAndNumbers(numbers: string): {
    delimiters: string[];
    sanitizedNumbers: string;
  } {
    let delimiters = [","];
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const delimiterPattern = numbers.substring(2, delimiterEndIndex);
      console.log({ delimiterPattern });

      if (delimiterPattern.startsWith("[") && delimiterPattern.endsWith("]")) {
        delimiters = this.extractMultipleDelimiters(delimiterPattern);
      } else {
        delimiters = [delimiterPattern];
      }

      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const sanitizedNumbers = numbers.replace(/\n/g, delimiters[0]);
    console.log("Inside extractDelimiterAndNumbers()", {
      delimiters,
      sanitizedNumbers,
    });
    return { delimiters, sanitizedNumbers };
  }

  private extractMultipleDelimiters(delimiterPattern: string): string[] {
    const delimiters: string[] = [];
    let delimiter = "";
    for (let i = 0; i < delimiterPattern.length; i++) {
      if (delimiterPattern[i] === "[") {
        delimiter = "";
      } else if (delimiterPattern[i] === "]") {
        delimiters.push(delimiter);
      } else {
        delimiter += delimiterPattern[i];
      }
    }
    console.log("Inside extractMultipleDelimiters()", { delimiters });
    return delimiters;
  }

  private splitStringNumberstoIntegers(
    numbers: string,
    delimiters: string[]
  ): number[] {
    let numArray = [numbers];
    delimiters.forEach((delimiter) => {
      numArray = numArray.flatMap((num) => num.split(delimiter));
    });
    console.log("Inside splitStringNumbersToIntegers", { numArray });
    return numArray.map((num) => parseInt(num, 10));
  }

  private throwIfNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }
  }

  private sumNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + (num < 1000 ? num : 0), 0);
  }
}
