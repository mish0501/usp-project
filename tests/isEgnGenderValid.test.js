import { isEgnGenderValid } from '../src/index'

test("test isEgnGenderValid", () => {
    expect(isEgnGenderValid("0047178800", "Мъж")).toBe(true)
    expect(isEgnGenderValid("0047178800", "Жена")).toBe(false)
    expect(isEgnGenderValid("004717880", "Момче")).toBe(false)
    expect(isEgnGenderValid("0068124568", "Момиче")).toBe(false)
    expect(isEgnGenderValid("0047328800", "Жена")).toBe(false)
    expect(isEgnGenderValid("9147178800", "Мъж")).toBe(true)
    expect(isEgnGenderValid("9147318800", "Момче")).toBe(true)
    expect(isEgnGenderValid("9147172839", "Момиче")).toBe(true)
    expect(isEgnGenderValid("9847315576", "Момиче")).toBe(true)
    expect(isEgnGenderValid("", "Мъж")).toBe(false)
    expect(isEgnGenderValid(" ", "Жена")).toBe(false)
    expect(isEgnGenderValid("6812228609", "Жена")).toBe(false)
})
