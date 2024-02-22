import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero para uno que no tiene reglas como el nro 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("deberia generar el mismo numero para otro numero que no tiene reglas como el nro 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });

  it("deberia generar Fizz para un numero que tiene esa regla como el nro 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });

  it("deberia generar Fizz para un numero multiplo de 3", () => {
    expect(generarFizzBuzz(6)).toEqual("Fizz");
  });
});

