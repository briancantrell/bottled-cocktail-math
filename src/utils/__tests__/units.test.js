import { toMl, toBatchFriendlyUnits } from "../units"

describe("toBatchFriendlyUnits", () => {
  describe("ingredient is in oz", () => {
    const whiskey = {
      name: "Whiskey",
      quantity: 2,
      units: "oz",
      id: 0
    }

    const subject = toBatchFriendlyUnits(whiskey)

    it("changes units to ml", () => {
      expect(subject.units).toEqual("ml")
    })

    it("converts quantity to ml", () => {
      expect(subject.quantity).toEqual(59)
    })

    it("merges other props", () => {
      expect(subject.name).toEqual("Whiskey")
      expect(subject.id).toEqual(0)
    })
  })

  describe("ingredient units is dashes", () => {
    const bitters = {
      name: "Bitters",
      quantity: 2,
      units: "dashes",
      id: 0
    }

    const subject = toBatchFriendlyUnits(bitters)

    it("changes units to ml", () => {
      expect(subject.units).toEqual("ml")
    })

    it("converts quantity to ml", () => {
      expect(subject.quantity).toEqual(1)
    })

    it("merges other props", () => {
      expect(subject.name).toEqual("Bitters")
      expect(subject.id).toEqual(0)
    })
  })
})
