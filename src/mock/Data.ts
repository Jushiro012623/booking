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


export const mock_weights = [
    { id: 1, name: "0.5 Meter" },
    { id: 2, name: "1 Meter" },
    { id: 3, name: "2 Meter" },
    { id: 4, name: "1 - 3 Meter" },
    { id: 5, name: "1 - 4 Meter" },
    { id: 6, name: "1 - 5 Meter" },
    { id: 7, name: "1 - 6 Meter" },
    { id: 8, name: "1 - 7 Meter" },
    { id: 9, name: "1 - 8 Meter" },
    { id: 10, name: "1 - 8.9 Meter" },
    { id: 11, name: "1 - 9.9 Meter" },
    { id: 12, name: "1 - 10 Meter" },
    { id: 13, name: "1 - 11 Meter" },
    { id: 14, name: "1 - 12 Meter" },
    { id: 15, name: "1 - 13 Meter" },
    { id: 16, name: "1 - 14 Meter" },
    { id: 17, name: "3 Tons" },
    { id: 18, name: "3 - 10 Tons" },
    { id: 19, name: "10 - 15 Tons" },
    { id: 20, name: "15 - 20 Tons" },
    { id: 21, name: "20 - 30 Tons" }
  ];
function getRandomFutureDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30) + 1; // Random number of days between 1 and 30
    today.setDate(today.getDate() + randomDays); // Add random days to the current date

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed)
    const day = String(today.getDate()).padStart(2, '0'); // Get the day
    return `${year}-${month}-${day}`;
}

export const vessels = [
    {id:1, name: "ARGO 1"},
    {id:2, name: "ARGO 2"},
    {id:3, name: "SUDA"},
]
const getRandomVessel = () => {
    const randomVessel = Math.floor(Math.random() * vessels.length); 
    return vessels[randomVessel].name;
}
const getRandomNumber = () => {return Math.floor(Math.random() * 3) + 1;}
const getRandomSlots = () => {return Math.floor(Math.random() * 20) + 1;}

const getRandomFare = () => {return Math.floor(Math.random() * (10000 - 100 + 1)) + 100;}
export const formatToPeso = (value : number) =>{
    const formattedAmount = new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(value);
    return formattedAmount;
}

export const mock_schedule = [
  { id: 1, date: getRandomFutureDate(), departure: '01:00 PM', arrival: '08:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel(), type_id: getRandomNumber() },
  { id: 2, date: getRandomFutureDate(), departure: '02:00 PM', arrival: '09:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 3, date: getRandomFutureDate(), departure: '03:00 PM', arrival: '10:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel:getRandomVessel() , type_id: getRandomNumber() },
  { id: 4, date: getRandomFutureDate(), departure: '04:00 PM', arrival: '11:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 5, date: getRandomFutureDate(), departure: '05:00 PM', arrival: '12:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 6, date: getRandomFutureDate(), departure: '06:00 PM', arrival: '01:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel:getRandomVessel() , type_id: getRandomNumber() },
  { id: 7, date: getRandomFutureDate(), departure: '07:00 PM', arrival: '02:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 8, date: getRandomFutureDate(), departure: '08:00 PM', arrival: '03:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 9, date: getRandomFutureDate(), departure: '09:00 PM', arrival: '04:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 10, date: getRandomFutureDate(), departure: '10:00 PM', arrival: '05:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 11, date: getRandomFutureDate(), departure: '11:00 PM', arrival: '06:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 12, date: getRandomFutureDate(), departure: '12:00 AM', arrival: '07:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 13, date: getRandomFutureDate(), departure: '01:00 AM', arrival: '08:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 14, date: getRandomFutureDate(), departure: '02:00 AM', arrival: '09:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 15, date: getRandomFutureDate(), departure: '03:00 AM', arrival: '10:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel:getRandomVessel() , type_id: getRandomNumber() },
  { id: 16, date: getRandomFutureDate(), departure: '04:00 AM', arrival: '11:00 AM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 17, date: getRandomFutureDate(), departure: '05:00 AM', arrival: '12:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 18, date: getRandomFutureDate(), departure: '06:00 AM', arrival: '01:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel:getRandomVessel() , type_id: getRandomNumber() },
  { id: 19, date: getRandomFutureDate(), departure: '07:00 AM', arrival: '02:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() },
  { id: 20, date: getRandomFutureDate(), departure: '08:00 AM', arrival: '03:00 PM', fare: formatToPeso(getRandomFare()), max_slots: 100, available_slots: getRandomSlots(), vessel: getRandomVessel() , type_id: getRandomNumber() }
];

