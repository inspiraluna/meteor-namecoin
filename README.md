# meteor-namecoin


## Installation
1. install namecoin 
2. install meteorjs from meteor.com
3. git clone this repository
4. cd into meteor-namecoin add ``settings.json`` with this conent:

``
	{
	"namecoinRpcHost": "localhost",
 	"namecoinRpcPort": "8336",
 	"namecoinRpcUsername": "((from your namecoinfconf))",
 	"namecoinRpcPassword": "((from your namecoin.conf))",
 	"public": {
    	"otherthings": "test",
  	}
``
5. run ``meteor npm install``
6. start meteor with ``meteor --settings=settings.json``