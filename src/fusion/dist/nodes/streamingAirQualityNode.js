const a0_0x7039=['nodeid','processRecordCb','Time','fusionNodeI','nodeId','triggerOnAddCallbacks','stampm','newRecord','lastTimestamp','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','createStore','apply','vmin','carno','pm025','log','Air\x20Quality\x20-\x20double\x20timestamp.','rawRecord','store','base','push','datetime','vavg','position','getAggregates','no2','temp','rawstore','pm100','buffer','parent','float','test','exports','vmax'];(function(_0x4e871a,_0x703923){const _0x5e78d2=function(_0x59611d){while(--_0x59611d){_0x4e871a['push'](_0x4e871a['shift']());}},_0x1c74cd=function(){const _0x15c7f6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x52fc47,_0x31645f,_0x498d89,_0x4805ac){_0x4805ac=_0x4805ac||{};let _0x37b448=_0x31645f+'='+_0x498d89,_0x1c1fc7=0x0;for(let _0x20a2bd=0x0,_0x5acb54=_0x52fc47['length'];_0x20a2bd<_0x5acb54;_0x20a2bd++){const _0x5c0cb2=_0x52fc47[_0x20a2bd];_0x37b448+=';\x20'+_0x5c0cb2;const _0x367f0f=_0x52fc47[_0x5c0cb2];_0x52fc47['push'](_0x367f0f),_0x5acb54=_0x52fc47['length'],_0x367f0f!==!![]&&(_0x37b448+='='+_0x367f0f);}_0x4805ac['cookie']=_0x37b448;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a422b,_0x430587){_0x5a422b=_0x5a422b||function(_0xba1629){return _0xba1629;};const _0x1a7229=_0x5a422b(new RegExp('(?:^|;\x20)'+_0x430587['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x55bab8=function(_0x108c5c,_0x2ffaa1){_0x108c5c(++_0x2ffaa1);};return _0x55bab8(_0x5e78d2,_0x703923),_0x1a7229?decodeURIComponent(_0x1a7229[0x1]):undefined;}},_0x4a00de=function(){const _0x7ac37e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7ac37e['test'](_0x15c7f6['removeCookie']['toString']());};_0x15c7f6['updateCookie']=_0x4a00de;let _0x12f0bc='';const _0x3039db=_0x15c7f6['updateCookie']();if(!_0x3039db)_0x15c7f6['setCookie'](['*'],'counter',0x1);else _0x3039db?_0x12f0bc=_0x15c7f6['getCookie'](null,'counter'):_0x15c7f6['removeCookie']();};_0x1c74cd();}(a0_0x7039,0x78));const a0_0x5e78=function(_0x4e871a,_0x703923){_0x4e871a=_0x4e871a-0x0;let _0x5e78d2=a0_0x7039[_0x4e871a];return _0x5e78d2;};const a0_0x498d89=function(){let _0x1fcc72=!![];return function(_0x4e5095,_0x502c0f){const _0xfb962c=_0x1fcc72?function(){if(_0x502c0f){const _0x2e87f5=_0x502c0f[a0_0x5e78('0x0')](_0x4e5095,arguments);return _0x502c0f=null,_0x2e87f5;}}:function(){};return _0x1fcc72=![],_0xfb962c;};}(),a0_0x31645f=a0_0x498d89(this,function(){const _0x16b616=function(){const _0x524d92=_0x16b616[a0_0x5e78('0x22')](a0_0x5e78('0x21'))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x524d92[a0_0x5e78('0x15')](a0_0x31645f);};return _0x16b616();});a0_0x31645f();const streamingNode=require('./streamingNode.js');class streamingAirQualityNode extends streamingNode{constructor(_0xc6f7c6,_0x165fbb,_0x15061e,_0x25e578,_0x368421,_0x381c3b,_0x1e5ed8){super(_0xc6f7c6,_0x165fbb,_0x15061e,_0x25e578,_0x368421,_0x381c3b,_0x1e5ed8),this[a0_0x5e78('0x1b')]=_0x381c3b,this[a0_0x5e78('0x19')]=_0x368421,this['parent']=_0x1e5ed8,this[a0_0x5e78('0x1c')]=_0x15061e[a0_0x5e78('0x18')],this[a0_0x5e78('0x12')]=[],this[a0_0x5e78('0xc')]=0x0,this[a0_0x5e78('0x8')][a0_0x5e78('0x23')]({'name':this[a0_0x5e78('0x1c')],'fields':[{'name':a0_0x5e78('0x1a'),'type':a0_0x5e78('0xa')},{'name':'rh','type':a0_0x5e78('0x14')},{'name':a0_0x5e78('0xf'),'type':'float'},{'name':a0_0x5e78('0xe'),'type':a0_0x5e78('0x14')},{'name':'o3','type':a0_0x5e78('0x14')},{'name':'pm025','type':'float'},{'name':a0_0x5e78('0x11'),'type':a0_0x5e78('0x14')},{'name':'carno','type':'float'},{'name':a0_0x5e78('0xb'),'type':a0_0x5e78('0x14')},{'name':a0_0x5e78('0x17'),'type':a0_0x5e78('0x14')},{'name':a0_0x5e78('0x1'),'type':'float'},{'name':'w','type':a0_0x5e78('0x14')}]}),this[a0_0x5e78('0x10')]=this[a0_0x5e78('0x8')][a0_0x5e78('0x7')](this[a0_0x5e78('0x1c')]),this[a0_0x5e78('0x20')]=0x0,super['createAggregates'](_0x25e578[_0x15061e['aggrConfigId']]),super['postConstructor']();}['processRecord'](_0x5542ae){let _0x49af9e={},_0xe84a46=_0x5542ae[a0_0x5e78('0x1e')],_0x274c59=isNaN(_0x5542ae['rh'])||_0x5542ae['rh']==null?0x0:_0x5542ae['rh'],_0xe1c1c6=isNaN(_0x5542ae[a0_0x5e78('0xf')])||_0x5542ae[a0_0x5e78('0xf')]==null?0x0:_0x5542ae[a0_0x5e78('0xf')],_0x103d15=isNaN(_0x5542ae['no2'])||_0x5542ae[a0_0x5e78('0xe')]==null?0x0:_0x5542ae[a0_0x5e78('0xe')],_0x342e02=isNaN(_0x5542ae['o3'])||_0x5542ae['o3']==null?0x0:_0x5542ae['o3'],_0x20b413=isNaN(_0x5542ae['pm025'])||_0x5542ae[a0_0x5e78('0x3')]==null?0x0:_0x5542ae[a0_0x5e78('0x3')],_0x52c11a=isNaN(_0x5542ae[a0_0x5e78('0x11')])||_0x5542ae[a0_0x5e78('0x11')]==null?0x0:_0x5542ae['pm100'],_0x1df4f8=isNaN(_0x5542ae[a0_0x5e78('0x2')])||_0x5542ae[a0_0x5e78('0x2')]==null?0x0:_0x5542ae[a0_0x5e78('0x2')],_0x5e920f=isNaN(_0x5542ae[a0_0x5e78('0xb')])||_0x5542ae[a0_0x5e78('0xb')]==null?0x0:_0x5542ae['vavg'],_0x3fed49=isNaN(_0x5542ae[a0_0x5e78('0x17')])||_0x5542ae['vmax']==null?0x0:_0x5542ae[a0_0x5e78('0x17')],_0x89772e=isNaN(_0x5542ae[a0_0x5e78('0x1')])||_0x5542ae[a0_0x5e78('0x1')]==null?0x0:_0x5542ae[a0_0x5e78('0x1')],_0x585d4b=isNaN(_0x5542ae['w'])||_0x5542ae['w']==null?0x0:_0x5542ae['w'];if(_0xe84a46<=this['lastTimestamp']){console[a0_0x5e78('0x4')](a0_0x5e78('0x5'));return;}if(isNaN(_0xe84a46)){console[a0_0x5e78('0x4')]('Air\x20Quality\x20-\x20timestamp\x20is\x20NaN!');return;}this[a0_0x5e78('0x6')]=this[a0_0x5e78('0x10')][a0_0x5e78('0x1f')]({'Time':_0xe84a46,'rh':_0x274c59,'temp':_0xe1c1c6,'no2':_0x103d15,'o3':_0x342e02,'pm025':_0x20b413,'pm100':_0x52c11a,'carno':_0x1df4f8,'vavg':_0x5e920f,'vmax':_0x3fed49,'vmin':_0x89772e,'w':_0x585d4b}),this[a0_0x5e78('0x10')][a0_0x5e78('0x1d')](this['rawRecord']),this[a0_0x5e78('0x20')]=_0xe84a46;let _0x4744ba=super[a0_0x5e78('0xd')](),_0x1db7f0=_0x4744ba;_0x1db7f0['rh']=_0x274c59,_0x1db7f0[a0_0x5e78('0xf')]=_0xe1c1c6,_0x1db7f0[a0_0x5e78('0xe')]=_0x103d15,_0x1db7f0['o3']=_0x342e02,_0x1db7f0[a0_0x5e78('0x3')]=_0x20b413,_0x1db7f0[a0_0x5e78('0x11')]=_0x52c11a,_0x1db7f0[a0_0x5e78('0x2')]=_0x1df4f8,_0x1db7f0['vavg']=_0x5e920f,_0x1db7f0['vmax']=_0x3fed49,_0x1db7f0[a0_0x5e78('0x1')]=_0x89772e,_0x1db7f0['w']=_0x585d4b,this['buffer'][a0_0x5e78('0x9')](_0x1db7f0),super['broadcastAggregates'](_0x4744ba),this[a0_0x5e78('0x19')](this['fusionNodeI'],this[a0_0x5e78('0x13')]);}}module[a0_0x5e78('0x16')]=streamingAirQualityNode;