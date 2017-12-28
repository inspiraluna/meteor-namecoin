# meteor-namecoin


read my article about my namecoin evaluation on steemit: https://steemit.com/namecoin/@inspiraluna/my-namecoin-evalution-experience-using-meteorjs

## Installation
1. install namecoin (see: https://wiki.namecoin.org/index.php?title=Install_and_Configure_Namecoin)
        make sure you use the latest self compiled version of namecoind e.g. on ubuntu 14.04!
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



## used namecoin apis
- namecoin explorer https://namecha.in/

- NameId Website https://nameid.org/
- NameId Idendity https://wiki.namecoin.org/index.php?title=Identity#Example:_Data_Format
- Messaging System https://wiki.namecoin.info/index.php?title=Messaging_System


##used meteor apis
- namecoin client api: https://wiki.namecoin.info/index.php?title=Client_API#name_new
- Reactivemethod: https://github.com/stubailo/meteor-reactive-method

##other tolls
- bitcoin webbased interface to rpc api https://chainquery.com/bitcoin-api/getbalance