// Local (client-only) collection
Notification = new Mongo.Collection(null);
randomList = new Mongo.Collection(null);


notify = function(message, type) {
    // class = good or bad
    var type = (type === 'good')? 'alert-success' : 'alert-danger';

    Notification.insert({ message, class: type });
}
