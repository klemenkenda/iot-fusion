const a0_0x3865=['feature\x20vector\x20ok','base','parse','variance','fusion','setSlaveOffset','aggr','value|ma|86400000','value|ma|21600000','createFolder','getStats','value|max|86400000','config','check\x20number\x20of\x20stores','min','equal','value|min|21600000','timeOfDay','constructor','{\x22timestamp\x22:0,\x20\x22timeOfDay\x22:\x200,\x20\x22dayAfterHoliday\x22:\x200,\x20\x22dayBeforeHoliday\x22:\x200,\x20\x22dayOfYear\x22:\x201,\x20\x22dayOfWeek\x22:\x202,\x20\x22dayOfMonth\x22:\x201,\x20\x22holiday\x22:\x201,\x20\x22monthOfYear\x22:\x201,\x20\x22weekEnd\x22:\x200\x20}','./db-1/','return\x20/\x22\x20+\x20this\x20+\x20\x22/','topic','streamFusion','removeFolder','none','static','monthOfYear','timevalue','nodes','global\x20config\x20correct','stores','object','../common/utils/fileManager.js','value|max|21600000','deepEqual','dayBeforeHoliday','value','dayOfMonth','base\x20saved','assert','getOffsetTimestamp','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','dayOfWeek','winbuf','check\x20types\x20of\x20nodes','streamingTimeValueNode','processRecord','dayOfYear','holiday','length','../streamFusion.js','check\x20number\x20of\x20fusion\x20objects','max','192.168.85.98:2181','timestamp','apply','weekEnd','floor','name','dayAfterHoliday','check\x20features\x20topic\x20name','N1_24h','check\x20fusion\x20model\x20name'];(function(_0x2d8489,_0x3865bb){const _0x2ff1bb=function(_0x35c91f){while(--_0x35c91f){_0x2d8489['push'](_0x2d8489['shift']());}},_0x539f2c=function(){const _0x131690={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1b960d,_0x596e16,_0xb2a0d7,_0x20ebdd){_0x20ebdd=_0x20ebdd||{};let _0x1016ef=_0x596e16+'='+_0xb2a0d7,_0x4120ae=0x0;for(let _0x34a17b=0x0,_0x4cb6a6=_0x1b960d['length'];_0x34a17b<_0x4cb6a6;_0x34a17b++){const _0x1f8d2d=_0x1b960d[_0x34a17b];_0x1016ef+=';\x20'+_0x1f8d2d;const _0x4b4b14=_0x1b960d[_0x1f8d2d];_0x1b960d['push'](_0x4b4b14),_0x4cb6a6=_0x1b960d['length'],_0x4b4b14!==!![]&&(_0x1016ef+='='+_0x4b4b14);}_0x20ebdd['cookie']=_0x1016ef;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf23761,_0x6e490e){_0xf23761=_0xf23761||function(_0x670354){return _0x670354;};const _0x5e0646=_0xf23761(new RegExp('(?:^|;\x20)'+_0x6e490e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x596ae1=function(_0x1bffdd,_0x114bbd){_0x1bffdd(++_0x114bbd);};return _0x596ae1(_0x2ff1bb,_0x3865bb),_0x5e0646?decodeURIComponent(_0x5e0646[0x1]):undefined;}},_0x4b141b=function(){const _0x5c103f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5c103f['test'](_0x131690['removeCookie']['toString']());};_0x131690['updateCookie']=_0x4b141b;let _0x2fd586='';const _0x1a86c5=_0x131690['updateCookie']();if(!_0x1a86c5)_0x131690['setCookie'](['*'],'counter',0x1);else _0x1a86c5?_0x2fd586=_0x131690['getCookie'](null,'counter'):_0x131690['removeCookie']();};_0x539f2c();}(a0_0x3865,0x123));const a0_0x2ff1=function(_0x2d8489,_0x3865bb){_0x2d8489=_0x2d8489-0x0;let _0x2ff1bb=a0_0x3865[_0x2d8489];return _0x2ff1bb;};const a0_0xb2a0d7=function(){let _0x17cbbc=!![];return function(_0x158775,_0x4d4c99){const _0x2970ca=_0x17cbbc?function(){if(_0x4d4c99){const _0x54af72=_0x4d4c99[a0_0x2ff1('0x15')](_0x158775,arguments);return _0x4d4c99=null,_0x54af72;}}:function(){};return _0x17cbbc=![],_0x2970ca;};}(),a0_0x596e16=a0_0xb2a0d7(this,function(){const _0x2f303c=function(){const _0x44cdc7=_0x2f303c[a0_0x2ff1('0x2f')](a0_0x2ff1('0x32'))()['constructor'](a0_0x2ff1('0x7'));return!_0x44cdc7['test'](a0_0x596e16);};return _0x2f303c();});a0_0x596e16();const fileManager=require(a0_0x2ff1('0x3e')),StreamFusion=require(a0_0x2ff1('0x10')),qm=require('qminer'),fs=require('fs');var assert=require(a0_0x2ff1('0x5'));let connectionConfig={'zookeeper':a0_0x2ff1('0x13')},smConf={'aggr':{'timevalue':[{'field':a0_0x2ff1('0x2'),'tick':[{'type':a0_0x2ff1('0x9'),'winsize':0x6*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':'max'},{'type':a0_0x2ff1('0x2b')},{'type':a0_0x2ff1('0x20')}]},{'type':a0_0x2ff1('0x9'),'winsize':0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':'max'},{'type':'min'},{'type':a0_0x2ff1('0x20')}]},{'type':'winbuf','winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':a0_0x2ff1('0x12')},{'type':a0_0x2ff1('0x2b')},{'type':a0_0x2ff1('0x20')}]}]}],'static':[{'field':a0_0x2ff1('0xe'),'tick':[{'type':'winbuf','winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'}]}]}]},'fusion':{'fusionModel':a0_0x2ff1('0x1b'),'connection':{'type':a0_0x2ff1('0x36')},'fusionTick':0x3c*0x3c*0x3e8,'nodes':[{'type':a0_0x2ff1('0x39'),'nodeid':'N1','aggrConfigId':a0_0x2ff1('0x39'),'master':!![],'fusionTick':0x3c*0x3c*0x3e8,'attributes':[{'time':0x0,'attributes':[{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x2')},{'type':'value','name':a0_0x2ff1('0x25')},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x2d')},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x3f')},{'type':a0_0x2ff1('0x2'),'name':'value|variance|21600000'},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x24')},{'type':a0_0x2ff1('0x2'),'name':'value|min|86400000'},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x28')},{'type':'value','name':'value|variance|86400000'}]},{'time':-0x18,'attributes':[{'type':'value','name':a0_0x2ff1('0x2')}]}]},{'type':a0_0x2ff1('0x37'),'nodeid':'S1','aggrConfigId':a0_0x2ff1('0x37'),'fusionTick':0x3c*0x3c*0x3e8,'master':![],'attributes':[{'time':0x18,'attributes':[{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x2e')},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x16')},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0xe')},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x19')},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0x1')},{'type':a0_0x2ff1('0x2'),'name':'dayOfWeek'},{'type':a0_0x2ff1('0x2'),'name':a0_0x2ff1('0xd')},{'type':'value','name':a0_0x2ff1('0x38')}]}]}]}};describe(a0_0x2ff1('0x34'),function(){let _0x592fb7;before(function(){fileManager[a0_0x2ff1('0x35')](a0_0x2ff1('0x31')),fileManager[a0_0x2ff1('0x26')](a0_0x2ff1('0x31')),_0x592fb7=new StreamFusion(connectionConfig,smConf[a0_0x2ff1('0x21')],smConf[a0_0x2ff1('0x23')]);}),after(function(){}),describe('initialization',function(){it(a0_0x2ff1('0x4'),function(){assert[a0_0x2ff1('0x2c')](typeof _0x592fb7[a0_0x2ff1('0x1e')],a0_0x2ff1('0x3d'));}),it(a0_0x2ff1('0x11'),function(){assert[a0_0x2ff1('0x2c')](_0x592fb7[a0_0x2ff1('0x3a')][a0_0x2ff1('0xf')],0x2);}),it(a0_0x2ff1('0x2a'),function(){assert[a0_0x2ff1('0x2c')](_0x592fb7[a0_0x2ff1('0x1e')][a0_0x2ff1('0x27')]()[a0_0x2ff1('0x3c')][a0_0x2ff1('0xf')],0x2);}),it(a0_0x2ff1('0x1c'),function(){assert[a0_0x2ff1('0x2c')](_0x592fb7['fusion_id'],a0_0x2ff1('0x1b'));}),it(a0_0x2ff1('0x1a'),function(){assert['equal'](_0x592fb7[a0_0x2ff1('0x33')],'features_N1_24h');}),it(a0_0x2ff1('0xa'),function(){assert[a0_0x2ff1('0x2c')](_0x592fb7[a0_0x2ff1('0x3a')][0x0][a0_0x2ff1('0x2f')]['name'],a0_0x2ff1('0xb')),assert[a0_0x2ff1('0x2c')](_0x592fb7[a0_0x2ff1('0x3a')][0x1][a0_0x2ff1('0x2f')][a0_0x2ff1('0x18')],'streamingStaticNode');}),it(a0_0x2ff1('0x3b'),function(){assert[a0_0x2ff1('0x0')](_0x592fb7[a0_0x2ff1('0x29')],smConf[a0_0x2ff1('0x21')]);}),it(a0_0x2ff1('0x1d'),function(){let _0x47229f=JSON[a0_0x2ff1('0x1f')](a0_0x2ff1('0x30'));_0x592fb7[a0_0x2ff1('0x3a')][0x1][a0_0x2ff1('0xc')](_0x47229f);for(let _0x589b07=0x1;_0x589b07<=0x49;_0x589b07++){_0x47229f[a0_0x2ff1('0x14')]=_0x589b07*0x3c*0x3c*0x3e8,_0x47229f[a0_0x2ff1('0x2e')]=_0x589b07%0x18,_0x47229f['dayOfYear']=Math[a0_0x2ff1('0x17')](_0x589b07/0x18)+0x1,_0x47229f[a0_0x2ff1('0x8')]=Math[a0_0x2ff1('0x17')](_0x589b07/0x18)+0x2,_0x47229f[a0_0x2ff1('0x3')]=Math[a0_0x2ff1('0x17')](_0x589b07/0x18)+0x1,_0x47229f[a0_0x2ff1('0xd')]=Math[a0_0x2ff1('0x17')](_0x589b07/0x18)+0x1,_0x47229f[a0_0x2ff1('0xe')]=0x0,_0x592fb7[a0_0x2ff1('0x3a')][0x1]['processRecord'](_0x47229f);}for(let _0x1ebd48=0x1;_0x1ebd48<=0x30;_0x1ebd48++){let _0x790514=_0x1ebd48*0x3c*0x3c;_0x592fb7[a0_0x2ff1('0x3a')][0x0][a0_0x2ff1('0xc')]({'time':_0x790514,'value':_0x1ebd48});}_0x592fb7[a0_0x2ff1('0x3a')][0x0]['setMasterOffset'](),_0x592fb7[a0_0x2ff1('0x3a')][0x1][a0_0x2ff1('0x22')](0x0),assert['equal'](_0x592fb7[a0_0x2ff1('0x3a')][0x0][a0_0x2ff1('0x6')](),0x30*0x3c*0x3c*0x3e8),assert[a0_0x2ff1('0x0')](_0x592fb7['buildFeatureVector'](),[0x30,0x2d,0x2a,0x30,4.666666666666667,0x24,0x18,0x30,54.166666666666664,0x18,0x1,0x0,0x0,0x0,0x0,0x5,0x4,0x1]),assert[a0_0x2ff1('0x2c')](_0x592fb7['lastTimestamp'],0x30*0x3c*0x3c*0x3e8);});});});