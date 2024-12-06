export const mock_routes = [
    {
      id: 1,
      origin: "San Jose",
      destination: "Semirara",
      transportation_type: "out"
    },
    {
      id: 2,
      origin: "San Jose",
      destination: "Caluya",
      transportation_type: "out"
    },
    {
      id: 3,
      origin: "San Jose",
      destination: "Libertad",
      transportation_type: "out"
    },
    {
      id: 4,
      origin: "Caluya",
      destination: "Libertad",
      transportation_type: "in"
    },
    {
      id: 5,
      origin: "Semirara",
      destination: "Caluya",
      transportation_type: "in"
    },
    {
      id: 6,
      origin: "Semirara",
      destination: "Libertad",
      transportation_type: "in"
    }
]

export const mock_shipment_type  = [
    {
        id: 1,
        name: "Tourist",
    },
    {
        id: 2,
        name: "Local",
    },
    {
        id: 3,
        name: "Private",
    },
]

export const mock_discount = [
    {
        id: 1,
        name: "REGULAR",
        percentage: 0,
        description: "0%"
    },
    {
        id: 2,
        name: "PWD/SENIOR",
        percentage: 0.20,
        description: "20%"
    },
    {
        id: 3,
        name: "HALF FARE",
        percentage: 0.50,
        description: "50%"
    },
    {
        id: 4,
        name: "MINOR",
        percentage: 0.30,
        description: "30%"
    },
    {
        id: 5,
        name: "STUDENT",
        percentage: 0.20,
        description: "20%"
    }
]
