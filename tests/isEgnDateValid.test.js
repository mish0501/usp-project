import { isEgnDateValid } from '../src/index'

test("test isEgnDateValid", () => {
    expect(isEgnDateValid("0047178800", "17/7/2000","dd/MM/yyyy","/")).toBe(true)
    expect(isEgnDateValid("0047178800", "17.7.2000","dd.MM.yyyy",".")).toBe(true)
    expect(isEgnDateValid("00471788", "17/7/2000","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("0068124568", "12/8/2000","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("0047328800", "32/7/2000","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("9147178800", "17/7/1991","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("9147318800", "31/7/1991","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("", "17/7/2000","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid(" ", "17/7/2000","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("00471788a0", "17/7/2000","dd/MM/yyyy","/")).toBe(false)
    expect(isEgnDateValid("6812228609", "1968-12-22","yyyy-MM-dd","-")).toBe(true)
})