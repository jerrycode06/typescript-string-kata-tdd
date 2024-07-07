export class StringCalculator {
  public add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
    numbers = numbers.replace(/\n/g, delimiter);

    const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
