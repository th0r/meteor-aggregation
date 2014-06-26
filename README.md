meteor-aggregation
==========================

Very simple implementation of some of mongodb aggregation framework functions for Meteor.

It extends `Collection` with 3 methods so far, **mapReduce**, **distinct** and **aggregate**, so that you can do:

```coffeescript
    col = new Meteor.Collection "name"

    if Meteor.isServer
        # mapReduce
        map = function() {emit(this.Region, this.Amount);}
        reduce = function(reg, am) { return Array.sum(am);};

        col.mapReduce map, reduce, {out: "out_collection_name", verbose: true}, (err,res)->
            console.dir res.stats # statistics object for running mapReduce
        
        # distinct
        result = col.distinct "Field Name" query
        console.dir result

        #aggregate
        result = col.aggregate pipeline
        console.dir result
```

This package is MIT Licensed. Do whatever you like with it but any responsibility for doing so is your own.