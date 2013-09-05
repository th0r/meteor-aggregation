Package.describe({
    summary: "Straightforward implementation of mongodb aggregation framework"
});

Npm.depends({mongodb: "1.3.17"});

Package.on_use(function (api, where) {
    api.use('coffeescript', ['server']);
    api.use('underscore', ['server']);

    api.add_files('server.coffee', 'server');

});
