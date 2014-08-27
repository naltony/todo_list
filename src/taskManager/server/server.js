var server = require('json-server');

server.low.db = {
    posts: [
        { id: 1, title: "First post", body: "This is the body of the post"},
        { id: 2, title: "How to use $http", body: "$http is a core service in angular"},
        { id: 3, title: "What can we do with it?", body: "we can do a lot of things with itr"},
        { id: 4, title: "server communication is not hard", body: "its a very simple API"}
    ]
};

server.listen(3000, function () {
    console.log('======= > API server  listen on port 3000');
});