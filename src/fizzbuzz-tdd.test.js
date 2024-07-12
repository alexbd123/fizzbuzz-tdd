import { test, expect } from "@jest/globals";
import { fizzbuzz } from "./fizzbuzz-tdd";

test("Convert 1 to 1", () => {
    const expectedResult = "1";
    const passOneToFizzbuzz = fizzbuzz(1);
    expect(passOneToFizzbuzz).toBe(expectedResult);
})

test("Convert 2 to 2", () => {
    const expectedResult = "2";
    const passTwoToFizzbuzz = fizzbuzz(2);
    expect(passTwoToFizzbuzz).toBe(expectedResult);
})

test("Convert 4 to 4", () => {
    const expectedResult = "4";
    const passFourToFizzbuzz = fizzbuzz(4);
    expect(passFourToFizzbuzz).toBe(expectedResult);
})

test("Convert 3 to Fizz", () => {
    const expectedResult = "Fizz";
    const passThreeToFizzbuzz = fizzbuzz(3);
    expect(passThreeToFizzbuzz).toBe(expectedResult);
})