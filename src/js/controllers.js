/* 
row Element 
<tr><td>id</td><td>name</td><td>ma@gmail.com</td><td>1412231</td><td><button class="btn btn-primary me-2">Update</button><button class="btn btn-danger me-2">Delete</button></td></tr>
*/
export const createRowTable = (options) => {
	const createRowElement = (row, data) => {
		// TODO COMPLETE ...
		// appendChild();
	};
	const { index, name, email, phone } = options;
	// const row = document.createElement("tr");
	// createRowElement(row, index);
	// TODO COMPLETE
	return row;
};

export const createBtnElelment = (type, cb, cbParams) => {
	// const newButton = ;
	// newButton.????? = type;
	classes = type !== 'Delete' ? 'btn-primary' : 'btn-danger';
	// TODO Complete Event

	return newButton;
};

export const searchContact = (contactList, value) => {
	// condition  contact.name.toLowerCase().includes(value) || contact.email.toLowerCase().includes(value) || contact.phone.toLowerCase().includes(value)
	//TODO  Complete
};
