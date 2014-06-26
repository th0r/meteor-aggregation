Package.describe({
    summary: "Straightforward implementation of mongodb aggregation framework"
});

Package.on_use(function (api) {
    api.use(['underscore', 'mongo-livedata'], 'server');

    api.add_files(['server.js'], 'server');
});
