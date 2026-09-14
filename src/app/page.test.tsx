function soma(a: number, b: number) {
  return a + b;
}

describe("soma", () => {
  test("soma 2 e 4 e verifica se o resultado é 6", () => {
    expect(soma(2, 4)).toBe(6);
  });
});
