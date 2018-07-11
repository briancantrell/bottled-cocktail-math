const recipes = [
  { 
    "key": "manhattan",
    "name": "Manhattan",
    "ingredients":  [
      {name: "Whiskey", quantity: 2, units: "oz", id: 0},
      {name: "Sweet vermouth", quantity: 1, units: "oz", id: 1},
    ],
    dilutionProfile: "shaken"
  },
  {
    "key":  "oldFashioned",
    "name": "Old Fashioned",
    "ingredients": [
      {name: "Whiskey", quantity: 2, units: "oz", id: 0},
      {name: "Simple syrup", quantity: 0.5, units: "oz", id: 1},
    ],
    dilutionProfile: "built"
  }
]
export default recipes



