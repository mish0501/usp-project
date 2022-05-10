import { isEgnValidGeneral } from '../src/index'

test("test isEgnValidGeneral", () => {
    expect(isEgnValidGeneral("0047178800")).toBe(true)
    expect(isEgnValidGeneral("004717880")).toBe(false)
    expect(isEgnValidGeneral("0068124568")).toBe(false)
    expect(isEgnValidGeneral("0047328800")).toBe(false)
    expect(isEgnValidGeneral("9147178800")).toBe(true)
    expect(isEgnValidGeneral("9147318800")).toBe(true)
    expect(isEgnValidGeneral("")).toBe(false)
    expect(isEgnValidGeneral(" ")).toBe(false)
    expect(isEgnValidGeneral("6812228804")).toBe(true)
})
