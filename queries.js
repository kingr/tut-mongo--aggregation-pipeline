db.companies.aggregate([
    { $match : { founded_year : 2011 } },
    { $sort : {name:-1}  },
    { $project : { _id : 0, name : 1  } }
])

db.companies.aggregate([
    { $match: { founded_year: { $gte: 2010 } } },
    { $group: {
        _id: "$founded_year",
        companies: { $push: "$name" }
    } },
    { $sort: { "_id": 1 } }
])