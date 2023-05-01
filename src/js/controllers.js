export const createRowTable = (options) => {
  const createRowElement = (row, data) => {
    // TODO COMPLETE ... 
    row?.appendChild(element);
  };
  const { index, name, email, phone } = options;
  // const row = document.createElement(???);
  createRowElement(row, index);
// TODO COMPLETE
  return row;
};

 export const createBtnElelment = (type, cb, cbParams) => {
    const newButton = document.createElement("button");
    newButton.textContent = type;
    newButton.classList.add(
      "btn",
      type !== "Delete" ? "btn-primary" : "btn-danger",
      "me-2"
    );
    // TODO Complete Event
    
    return newButton;
  };
  


  export const searchContact = (contactList,value) => {
    // condition  contact.name.toLowerCase().includes(value) || contact.email.toLowerCase().includes(value) || contact.phone.toLowerCase().includes(value)
    //TODO  Complete  
  }