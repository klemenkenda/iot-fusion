const a0_0x3512=['subscribe','config','StreamFusion\x20MQTT\x20listener:\x20','addListener','constructor','client','addPublisher','clientId','MQTT\x20Error','return\x20/\x22\x20+\x20this\x20+\x20\x22/','StreamFusion\x20MQTT\x20producer:\x20','log','connect','apply','publishTopic','mqttEndpoint','topic','parse','test','publish','error','mqtt','stringify'];(function(_0x387d69,_0x351262){const _0x206809=function(_0x45c9f2){while(--_0x45c9f2){_0x387d69['push'](_0x387d69['shift']());}},_0x1583a0=function(){const _0xc1f272={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2c9404,_0x50a83e,_0xed26ce,_0x4e3b70){_0x4e3b70=_0x4e3b70||{};let _0x193ca1=_0x50a83e+'='+_0xed26ce,_0x4bf940=0x0;for(let _0x14a0a5=0x0,_0x1bc512=_0x2c9404['length'];_0x14a0a5<_0x1bc512;_0x14a0a5++){const _0x59786a=_0x2c9404[_0x14a0a5];_0x193ca1+=';\x20'+_0x59786a;const _0x1f6cad=_0x2c9404[_0x59786a];_0x2c9404['push'](_0x1f6cad),_0x1bc512=_0x2c9404['length'],_0x1f6cad!==!![]&&(_0x193ca1+='='+_0x1f6cad);}_0x4e3b70['cookie']=_0x193ca1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4bc540,_0x165394){_0x4bc540=_0x4bc540||function(_0x5bfcbb){return _0x5bfcbb;};const _0x912590=_0x4bc540(new RegExp('(?:^|;\x20)'+_0x165394['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5abfd7=function(_0x282847,_0x306018){_0x282847(++_0x306018);};return _0x5abfd7(_0x206809,_0x351262),_0x912590?decodeURIComponent(_0x912590[0x1]):undefined;}},_0x405371=function(){const _0x337ffd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x337ffd['test'](_0xc1f272['removeCookie']['toString']());};_0xc1f272['updateCookie']=_0x405371;let _0x532f7e='';const _0x4d470a=_0xc1f272['updateCookie']();if(!_0x4d470a)_0xc1f272['setCookie'](['*'],'counter',0x1);else _0x4d470a?_0x532f7e=_0xc1f272['getCookie'](null,'counter'):_0xc1f272['removeCookie']();};_0x1583a0();}(a0_0x3512,0x151));const a0_0x2068=function(_0x387d69,_0x351262){_0x387d69=_0x387d69-0x0;let _0x206809=a0_0x3512[_0x387d69];return _0x206809;};const a0_0xed26ce=function(){let _0x29cd89=!![];return function(_0x3af314,_0x149ae9){const _0x247252=_0x29cd89?function(){if(_0x149ae9){const _0x5d4b3e=_0x149ae9[a0_0x2068('0x15')](_0x3af314,arguments);return _0x149ae9=null,_0x5d4b3e;}}:function(){};return _0x29cd89=![],_0x247252;};}(),a0_0x50a83e=a0_0xed26ce(this,function(){const _0x154a8e=function(){const _0x44279d=_0x154a8e['constructor'](a0_0x2068('0x11'))()[a0_0x2068('0xc')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x44279d[a0_0x2068('0x3')](a0_0x50a83e);};return _0x154a8e();});a0_0x50a83e();let Broker=require('./abstract.js');const mqtt=require(a0_0x2068('0x6'));class MQTTBroker extends Broker{constructor(_0x121b8c,_0x49d190,_0x5a434d){console[a0_0x2068('0x13')]('Constructor\x20MQTT\x20-\x20client\x20id:\x20'+_0x121b8c['clientId'],_0x5a434d),super(_0x121b8c,_0x49d190,_0x5a434d),this[a0_0x2068('0x9')][a0_0x2068('0xf')]=this[a0_0x2068('0x9')][a0_0x2068('0xf')]+_0x5a434d,this[a0_0x2068('0xd')]=mqtt[a0_0x2068('0x14')](this['config'][a0_0x2068('0x0')],this[a0_0x2068('0x9')]),this['client']['on'](a0_0x2068('0x5'),function(_0x6c8a9e){console[a0_0x2068('0x13')](a0_0x2068('0x10'),_0x6c8a9e);});}[a0_0x2068('0xe')](){console[a0_0x2068('0x13')](a0_0x2068('0x12')+this['topic']),this['publishTopic']=this[a0_0x2068('0x1')];}[a0_0x2068('0xb')](_0x3d5771){console[a0_0x2068('0x13')](a0_0x2068('0xa')+this[a0_0x2068('0x1')]),this['client'][a0_0x2068('0x8')](this[a0_0x2068('0x1')],{'qos':0x2}),this[a0_0x2068('0xd')]['on']('message',function(_0x2f9ac4,_0x199752){try{_0x3d5771(JSON[a0_0x2068('0x2')](_0x199752));}catch(_0x4de827){console[a0_0x2068('0x13')](_0x4de827);}});}[a0_0x2068('0x4')](_0x2dc593){console[a0_0x2068('0x13')]('TOPIC:\x20',this['publishTopic'],'MESSAGE:\x20',_0x2dc593),this[a0_0x2068('0xd')][a0_0x2068('0x4')](this[a0_0x2068('0x16')],JSON[a0_0x2068('0x7')](_0x2dc593));}}module['exports']=MQTTBroker;