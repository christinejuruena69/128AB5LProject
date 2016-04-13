[![Stories in Ready](https://badge.waffle.io/christinejuruena69/128AB5LProject.png?label=ready&title=Ready)](https://waffle.io/christinejuruena69/128AB5LProject)
# CMSC 128 AB-5L Project

### IMPORTANT!
  * Never ever push to the *master* branch
  * Please read [our project wiki](https://github.com/christinejuruena69/128AB5LProject/wiki) for our coding conventions and workflow

### Requirements:
  * [nodejs](https://github.com/creationix/nvm)
  * [meteor js](http://www.meteor.com/)
  * [git](http://git-scm.com/)
  * [iron cli](https://github.com/iron-meteor/iron-cli)
```
  sudo npm i -g iron-meteor
```

### Cloning the Repository
  1. In terminal, go to directory where you want to install the project
  2. Type in:
```
git clone https://github.com/christinejuruena69/128AB5LProject.git
```

### Starting the server
  1. Change directory to repository
  2. Type in:
```
iron run
```

### Initial Accounts
On server startup, two accounts shall be automatically generated. They are as follows:
```
{
    username: 'admin',
    password: 'admin',
    profile: {
        type: 'admin'
    }
},
{
    username: 'teacher',
    password: 'teacher',
    profile: {
        type: 'teacher'
    }
}
```

* **To login**, go to **/login** and type the credentials of these accounts.
* **To create an account**, you can go to **/register** and type the accounts you want to make

### Checking Data
* **To check the data in available to the client**, press `CTRL + M` and play with the mongol interface
