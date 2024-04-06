const path = require('path')

const paths = [
    "/usr/local/../local/bin",
    "C:\\Users\\Alice\\..\\Documents\\..\\Downloads",
    "C:/Program Files/./Node.js",
    "/home/user/././././workspace/../project",
  ];
  console.log(path.resolve("/usr/local/../local/bin"))
  console.log(path.dirname("C:\\Users\\Alice\\..\\Documents\\..\\Downloads"))
  console.log(path.resolve( "C:/Program Files/./Node.js"))
  console.log(path.resolve( "/home/user/././././workspace/../project"))