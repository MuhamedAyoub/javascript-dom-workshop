import { ALERT_MESSAGE, NODES, UPDATE_QUERIES } from "./constants";
import { createBtnElelment, createRowTable } from "./controllers";
import { Contact } from "./models";

export class ContactManager {
    contacts;
    currentlyEditingIndex;
    constructor() {
      this.contacts = [];
      this.currentlyEditingIndex = null;
    }
  
    addContact(name, email, phone) {
      const contact = new Contact(name, email, phone);
      this.contacts.push(contact);
      this.displayContacts();
    }
  
    updateContact(index, name, email, phone) {
        try {
            this.contacts[index] = {
                name,email,phone
            } 
            this.displayContacts();
        } catch(e) {
            alert(e)
        }
    }
  
    deleteContact = (index) =>  {
      this.contacts.splice(index, 1);
      this.displayContacts();
    }
  
    displayContacts(filteredContacts = null) {
        
        const  contactList = document.querySelector("#contactList tbody");
        contactList.innerHTML = "";
        const contactsToDisplay = filteredContacts ?? this.contacts 
        return contactsToDisplay.forEach((contact, index) => {
        const row  = createRowTable({index,...contact})
        const actionCell = document.createElement("td");
        actionCell.appendChild(createBtnElelment("Update",this.openUpdateModal,index));
        actionCell.appendChild(createBtnElelment("Delete",this.deleteContact,index));
        row.appendChild(actionCell);
        contactList.appendChild(row);
      });
  
      
    }
  
    openUpdateModal = (index) => {
        const contact = this.contacts[index]
        this.currentlyEditingIndex = index;
        document.getElementById(UPDATE_QUERIES.UPDATE_NAME).value = contact.name;
        document.getElementById(UPDATE_QUERIES.UPDATE_EMAIL).value = contact.email;
        document.getElementById(UPDATE_QUERIES.UPDATE_PHONE).value = contact.phone;
        NODES.UPDATE_MODEL.classList.add("show");
        NODES.UPDATE_MODEL.style.display = "block";
        document.body.classList.add("modal-open");
      }
      closeUpdateModal() {
        NODES.UPDATE_MODEL.classList.remove("show");
        NODES.UPDATE_MODEL.style.display = "none";
        document.body.classList.remove("modal-open");
      }
      
      updateContactFromModal() {
        const updatedName = document.getElementById(UPDATE_QUERIES.UPDATE_NAME).value.trim();
        const updatedEmail = document.getElementById(UPDATE_QUERIES.UPDATE_EMAIL).value.trim();
        const updatedPhone = document.getElementById(UPDATE_QUERIES.UPDATE_PHONE).value.trim();
      
        if (updatedName === "" || updatedEmail === "" || updatedPhone === "") {
          return alert(ALERT_MESSAGE);
          
        }
      
        this.updateContact(
          this.currentlyEditingIndex,
          updatedName,
          updatedEmail,
          updatedPhone
        );
      
        this.closeUpdateModal();
      }
  }