import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { ContactManager } from './services';
import {
	ADD_QUERIES,
	ALERT_MESSAGE,
	NODES,
	SEARCH_QUERIES,
	UPDATE_QUERIES,
} from './constants';
import { searchContact } from './controllers';

const contactManager = new ContactManager();

NODES.ADD_CONTACT_FORM.addEventListener('???', (e) => {
	// preventDefault;
	//   const name = document.getElementById(ADD_QUERIES.ADD_NAME).value.trim();
	//
});

//! Handle Close Buttons
// const closeBtns = document.getElements???
// TODO Complete ..
NODES.UPDATE_FORM.addEventListener('??', (e) => {
	//   e.preventDefault();
	// updateContactFromModal call
});

NODES.SEARCH_FORM.addEventListener('??', (e) => {
	// preventDefault;
	//   const searchNode
	//   const searchTerm
	const filteredContacts = searchContact(contactManager.contacts, searchTerm);
	// display
	searchNode.textContent = '';
});
