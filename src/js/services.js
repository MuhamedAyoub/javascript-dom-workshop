import { ALERT_MESSAGE, NODES, UPDATE_QUERIES } from "./constants";
import { createBtnElelment, createRowTable } from "./controllers";
import { Contact } from "./models";

export class ContactManager {
    // currentlyEditingIndex;
    constructor() {
        //TODO Complete ..
      this.currentlyEditingIndex = null;
    }
  
    addContact(name, email, phone) {
      // TODO complete ..
      this.displayContacts();
    }
  
    updateContact(index, name, email, phone) {
        try {
            //TODO update code ..
            this.displayContacts();
        } catch(e) {
            alert(e)
        }
    }
  
    deleteContact = (index) =>  {
        //TODO delete code ..
    //   this.displayContacts();
    }
  
    displayContacts(filteredContacts = null) {
        
        const  contactList = document.querySelector("#contactList tbody");
        contactList.innerHTML = "";
        // const contactsToDisplay = 
        // use createRowTable function
        /*
       TODO Complete  ...
        */ 
  
      
    }
  
    openUpdateModal = (index) => {
        /*
      TODO  Complete ...
        
        */
        // NODES.UPDATE_MODEL.classList.add("show");
        // NODES.UPDATE_MODEL.style.display = "block";
        // document.body.classList.add("modal-open");
      }
      closeUpdateModal() {
        NODES.UPDATE_MODEL.classList.remove("show");
        NODES.UPDATE_MODEL.style.display = "none";
        document.body.classList.remove("modal-open");
      }
      
      updateContactFromModal() {
        try {
            // TODO Complete
            if (updatedName === "" || updatedEmail === "" || updatedPhone === "") {
                throw  new Error(ALERT_MESSAGE);
                
            }
            
            // this.updateContact(
                //   this.currentlyEditingIndex,
                //   updatedName,
                //   updatedEmail,
                //   updatedPhone
                // );
                
                // this.closeUpdateModal();
            }catch(e) {
                alert(e)
            }
      }
  }