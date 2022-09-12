export const pluralize = (n: number, forms: string[]): string => {
  return n % 10 == 1 && n % 100 != 11
    ? forms[0]
    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
    ? forms[1]
    : forms[2];
};


export const githubToken = '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'