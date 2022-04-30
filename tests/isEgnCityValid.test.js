import { isEgnCityValid } from '../src/index'

test("test isEgnCityValid", () => {
    expect(isEgnCityValid("0047178800", "Шумен")).toBe(true)
    expect(isEgnCityValid("0047178800", "Варна")).toBe(false)
    expect(isEgnCityValid("004717880", "Габрово")).toBe(false)
    expect(isEgnCityValid("0068124568", "София")).toBe(false)
    expect(isEgnCityValid("0047328800", "Пловдив")).toBe(false)
    expect(isEgnCityValid("9147178800", "Шумен")).toBe(true)
    expect(isEgnCityValid("9147318800", "Шумен")).toBe(true)
    expect(isEgnCityValid("9147172839", "Кюстендил")).toBe(true)
    expect(isEgnCityValid("9847315576", "Силистра")).toBe(true)
    expect(isEgnCityValid("", "Пазарджик")).toBe(false)
    expect(isEgnCityValid(" ", "Видин")).toBe(false)
    expect(isEgnCityValid("00471788a0", "Търговище")).toBe(false)
    expect(isEgnCityValid("6812228609", "Хасково")).toBe(true)
})
