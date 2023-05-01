import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { ContactManager } from "./services";
import { ADD_QUERIES, NODES, SEARCH_QUERIES, UPDATE_QUERIES } from "./constants";
import { searchContact } from "./controllers";

  

const contactManager = new ContactManager();

NODES.ADD_CONTACT_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById(ADD_QUERIES.ADD_NAME).value.trim();
  const email = document.getElementById(ADD_QUERIES.ADD_EMAIL).value.trim();
  const phone = document.getElementById(ADD_QUERIES.ADD_PHONE).value.trim();

  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all fields");
    return;
  }

  contactManager.addContact(name, email, phone);

  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("phoneInput").value = "";
});

const closeBtns = document.getElementsByClassName(UPDATE_QUERIES.CLOSE_BUTTONS)


for(let i = 0 ; i < closeBtns.length ; i++ ) closeBtns.item(i).addEventListener("click",() => contactManager.closeUpdateModal())
NODES.UPDATE_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  contactManager.updateContactFromModal();
});

NODES.SEARCH_FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchNode = document.getElementById(SEARCH_QUERIES.SEARCH_INPUT)
  const searchTerm = searchNode.value.trim().toLowerCase();
  const filteredContacts = searchContact(contactManager.contacts,searchTerm)
  console.log(filteredContacts)
  contactManager.displayContacts(filteredContacts);
  searchNode.textContent = ""
});
