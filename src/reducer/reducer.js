

let initialState = [
  "https://www.mocky.io/v2/59b3f0b0100000e30b236b7e",
  "https://www.mocky.io/v2/59ac28a9100000ce0bf9c236",
  " https://www.mocky.io/v2/59ac293b100000d60bf9c239  ","" 
];
let index = 0;

export const changeTheApi = (state = initialState, action) => {
  console.log("this is ", state);
  console.log("this is index", index);
  switch (action.type) {
    case "FETCH":
      if (index == 3) {
         
        return "";
      }
      return initialState[index++];
    default:
      return initialState[0];
  }
};

export const changeSortMethod = (state, action) => {
  switch (action.type) {
    case "DATE":
      return "DATE";
    case "LIKE":
      return "LIKE";
    case "SHARE":
      return "SHARE";
      case "VIEWS":
      return "VIEWS";
    default:
      return "DATE";
  }
};
