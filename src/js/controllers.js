export const createRowTable = (options) => {
  const createRowElement = (row, data) => {
    const element = document.createElement("td");
    element.textContent = data;
    row?.appendChild(element);
  };
  const { index, name, email, phone } = options;
  const row = document.createElement("tr");
  createRowElement(row, index);
  createRowElement(row, name);
  createRowElement(row, email);
  createRowElement(row, phone);
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
    newButton.addEventListener("click", () => cb(cbParams));
    return newButton;
  };
  


  export const searchContact = (contactList,value) => {
    return contactList.filter((contact) => {
      return contact.name.toLowerCase().includes(value) || contact.email.toLowerCase().includes(value) || contact.phone.toLowerCase().includes(value)
      
    });
  }