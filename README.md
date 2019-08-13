## Contact List CLI App

I built this project in order to practice using Node.js (module system, file system, command line arguments).  
Using this command line app you can:
- add a new contact
- remove a contact
- read a contact
- list all contacts

#### Install

    $ git clone https://github.com/orvalho/contact-list
    $ cd contact-list
    $ npm install

#### Usage

- add a new contact - provide name and email  
```
    node app.js add --name="John Doe" --email="john@example.com"
```

- remove a contact - provide name  
``` 
    node app.js remove --name="John Doe"
```
- read a contact - provide name  
``` 
    node app.js read --name="Jane Doe" 
```
- list all contacts  
``` 
    node app.js list
```

#### Stack

-   fs
-   yargs
-   chalk
