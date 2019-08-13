const fs = require('fs'); 
const chalk = require('chalk');

const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync('contacts.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
};

const saveContacts = contacts => {
    const dataJSON = JSON.stringify(contacts);
    fs.writeFileSync('contacts.json', dataJSON);
};

const addContact = (name, email) => {
    const contacts = loadContacts();
    const duplicateContact = contacts.find(contact => contact.name === name);
    
    if (duplicateContact) {
        console.log(chalk.red.inverse('Contact name taken!'));
    } else {
        const updatedContacts = [...contacts, {name, email}];
        saveContacts(updatedContacts);
        console.log(chalk.green.inverse('New contact added!'))
    }
};

const removeContact = name => {
    const contacts = loadContacts();
    const contactsToKeep = contacts.filter(contact => contact.name !== name);

    if (contactsToKeep.length < contacts.length) {
        saveContacts(contactsToKeep);
        console.log(chalk.green.inverse('Contact removed!'));
    } else {
        console.log(chalk.red.inverse('No contact found!'));
    }
};

const readContact = name => {
    const contacts = loadContacts();
    const contact = contacts.find(contact => contact.name === name);

    if (contact) {
        console.log(chalk.inverse(`${contact.name} - ${contact.email}`));
    } else {
        console.log(chalk.red.inverse('No contact found!'));
    }
};

const listContacts = () => {
    const contacts = loadContacts();

    if (contacts.length) {
        console.log(chalk.inverse('Your contacts:'));
        contacts.forEach(contact => console.log(contact.name));
    } else {
        console.log(chalk.red.inverse('No contacts found!'));
    }
};

module.exports = {addContact, removeContact, readContact, listContacts};