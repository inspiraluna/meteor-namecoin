# meteor-namecoin


## Installation
1. install namecoin (see: https://wiki.namecoin.org/index.php?title=Install_and_Configure_Namecoin)
2. install meteorjs from meteor.com ``curl https://install.meteor.com/ | sh``
3. git clone this repository
4. cd into meteor-namecoin add ``settings.json`` with this conent:
```
{
"namecoinRpcHost": "localhost",
"namecoinRpcPort": "8336",
"namecoinRpcUsername": "((from your namecoin.conf))",
"namecoinRpcPassword": "((from your namecoin.conf))"
}
```
5. run ``meteor npm install``
6. start meteor with ``meteor --settings=settings.json``



##used apis
- Reactiveethod: https://github.com/stubailo/meteor-reactive-method