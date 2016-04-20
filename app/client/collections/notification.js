// Local (client-only) collection
Notification = new Mongo.Collection(null);

notify = function (message) {
    Notification.insert({ message })
};
