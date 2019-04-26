# Medieval Math Mania

##### Description:</br>Hit Target is a game for helping children to learn multiplication tables and develop their number sense. It is a game played between two students, where they are given an initial number, and are asked to find an answer within a certain range. Each player take turns trying to guess a multiplication table that fits within the given bounds, and then each player is awarded based on whether they find an answer within the range or not.

##### Client:</br>Amanda Katharine Serenevy, Ph.D.</br>Executive Director, Riverbend Community Math Center  

#### Requirements:

    sudo apt-get install git
    sudo apt-get install docker-ce
    git clone git@github.com:cs4560-18-19/belloq.git

#### Build & Run:

    docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
    docker-compose build
    docker-compose up

Then visit 'localhost' or '0.0.0.0' in a browser URL bar to see the game build

#### Rerun:

    sudo docker container ls
    sudo docker stop <CONTAINER ID>

#### Team Belloq:  
##### Nathan Estep - Team Leader</br>Eric Bitikofer - Release Manager</br>Evan Bradford - Document Manager</br>Dakota O'Brien - Quality Assurance
![logo](https://github.com/cs4560-18-19/belloq/blob/master/belloq-door.jpg)


# medieval-math-mania

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
