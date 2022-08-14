>show dbs
>>local
>>admin

use "database name" 
eg.
>use youtube
// it access the youtube named database if it exist ,if not it creates it

>db
>>youtube

>db.createCollection("video")
>show dbs
>>local
>>admin
>>youtube

>db.createCollection("playlist")
>db.createCollection("video")
>db.video.drop()
// to delete collection-^

db.playlist.insertOne({name:'dsa lecture',channel:'codehelp',about:'education',view:25000})
db.playlist.insertOne({name:'c++ lecture',channel:'codehelp',about:'education',view:45000})
//to add data in youtube>playlist

db.playlist.find()
//shows all the data stored in playlist collection
db.playlist.insertOne({name:'dsa lecture'},{$set:{channel:'codehelpWithMe'}})
//to update/insert a data in playlist collection
db.playlist.deleteOne({channel:'codehelp'})
//to delete a data in playlist collection
>db.dropDatabase()
// to delete current selected database-^

