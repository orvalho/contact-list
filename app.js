const yargs = require('yargs'); 
const {addContact, removeContact, readContact, listContacts} = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'add a new contact',
    builder: {
        name: {
            describe: 'name of person',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'email of person',
            demandOption: true,
            type: 'string'
        }
    },
    handler({name, email}) {
        addContact(name, email);
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a contact',
    builder: {
        name: {
            describe: 'name of person',
            demandOption: true,
            type: 'string'
        }
    },
    handler({name}) {
        removeContact(name);
    }
})

yargs.command({
    command: 'read',
    describe: 'read a contact',
    builder: {
        name: {
            describe: 'name of person',
            demandOption: true,
            type: 'string'
        }
    },
    handler({name}) {
        readContact(name);
    }
})

yargs.command({
    command: 'list',
    describe: 'list all contacts',
    handler() {
        listContacts();
    }
})

yargs.parse()