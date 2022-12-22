export const pluralize = (n: number, forms: string[]): string => {
  return n % 10 == 1 && n % 100 != 11
    ? forms[0]
    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
    ? forms[1]
    : forms[2];
};

export const githubToken = 'token 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';
