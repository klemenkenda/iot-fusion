var _0x550c=['StreamFusion\x20MQTT\x20producer:\x20','topic','publishTopic','subscribe','message','publish','TOPIC:\x20','stringify','exports','./abstract.js','mqtt','log','Constructor\x20MQTT\x20-\x20client\x20id:\x20','clientId','config','client','connect','error','MQTT\x20Error','addPublisher'];(function(_0x3c6397,_0x5abbff){var _0x507530=function(_0x5bcec4){while(--_0x5bcec4){_0x3c6397['push'](_0x3c6397['shift']());}};var _0x7768d7=function(){var _0xd12ece={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2e731d,_0x533eb4,_0x10f3e5,_0x5aebb1){_0x5aebb1=_0x5aebb1||{};var _0x50d292=_0x533eb4+'='+_0x10f3e5;var _0x2156fd=0x0;for(var _0x2156fd=0x0,_0xa8f331=_0x2e731d['length'];_0x2156fd<_0xa8f331;_0x2156fd++){var _0x5d15fd=_0x2e731d[_0x2156fd];_0x50d292+=';\x20'+_0x5d15fd;var _0x5ac3ff=_0x2e731d[_0x5d15fd];_0x2e731d['push'](_0x5ac3ff);_0xa8f331=_0x2e731d['length'];if(_0x5ac3ff!==!![]){_0x50d292+='='+_0x5ac3ff;}}_0x5aebb1['cookie']=_0x50d292;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d92c8,_0x2671a4){_0x1d92c8=_0x1d92c8||function(_0x529e62){return _0x529e62;};var _0x5465f6=_0x1d92c8(new RegExp('(?:^|;\x20)'+_0x2671a4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x303e39=function(_0x56d3fc,_0x27449b){_0x56d3fc(++_0x27449b);};_0x303e39(_0x507530,_0x5abbff);return _0x5465f6?decodeURIComponent(_0x5465f6[0x1]):undefined;}};var _0x1f64b4=function(){var _0x51dddb=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x51dddb['test'](_0xd12ece['removeCookie']['toString']());};_0xd12ece['updateCookie']=_0x1f64b4;var _0xacbfce='';var _0x3e3e50=_0xd12ece['updateCookie']();if(!_0x3e3e50){_0xd12ece['setCookie'](['*'],'counter',0x1);}else if(_0x3e3e50){_0xacbfce=_0xd12ece['getCookie'](null,'counter');}else{_0xd12ece['removeCookie']();}};_0x7768d7();}(_0x550c,0xd1));var _0x56ae=function(_0x177fac,_0x1ac74a){_0x177fac=_0x177fac-0x0;var _0x30e1fd=_0x550c[_0x177fac];return _0x30e1fd;};var _0x5be702=function(){var _0x3e65f0=!![];return function(_0x47a811,_0x466900){var _0x37599f=_0x3e65f0?function(){if(_0x466900){var _0x569fbc=_0x466900['apply'](_0x47a811,arguments);_0x466900=null;return _0x569fbc;}}:function(){};_0x3e65f0=![];return _0x37599f;};}();var _0x52a03d=_0x5be702(this,function(){var _0x21460f=function(){return'\x64\x65\x76';},_0x464457=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x460c08=function(){var _0x13f319=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x13f319['\x74\x65\x73\x74'](_0x21460f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x528ef9=function(){var _0x40eda0=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x40eda0['\x74\x65\x73\x74'](_0x464457['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x59030e=function(_0x40b3ee){var _0x5ee31f=~-0x1>>0x1+0xff%0x0;if(_0x40b3ee['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x5ee31f)){_0x57f681(_0x40b3ee);}};var _0x57f681=function(_0x26449b){var _0x520c46=~-0x4>>0x1+0xff%0x0;if(_0x26449b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x520c46){_0x59030e(_0x26449b);}};if(!_0x460c08()){if(!_0x528ef9()){_0x59030e('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x59030e('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x59030e('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x52a03d();let Broker=require(_0x56ae('0x0'));const mqtt=require(_0x56ae('0x1'));class MQTTBroker extends Broker{constructor(_0x33748d,_0x3e4c21,_0x5c685e){console[_0x56ae('0x2')](_0x56ae('0x3')+_0x33748d[_0x56ae('0x4')],_0x5c685e);super(_0x33748d,_0x3e4c21,_0x5c685e);this[_0x56ae('0x5')]['clientId']=this[_0x56ae('0x5')][_0x56ae('0x4')]+_0x5c685e;this[_0x56ae('0x6')]=mqtt[_0x56ae('0x7')](this['config']['mqttEndpoint'],this[_0x56ae('0x5')]);this['client']['on'](_0x56ae('0x8'),function(_0x432180){console[_0x56ae('0x2')](_0x56ae('0x9'),_0x432180);});}[_0x56ae('0xa')](){console['log'](_0x56ae('0xb')+this[_0x56ae('0xc')]);this[_0x56ae('0xd')]=this['topic'];}['addListener'](_0xe42b77){console['log']('StreamFusion\x20MQTT\x20listener:\x20'+this[_0x56ae('0xc')]);this[_0x56ae('0x6')][_0x56ae('0xe')](this[_0x56ae('0xc')],{'qos':0x2});this[_0x56ae('0x6')]['on'](_0x56ae('0xf'),function(_0x4a4c56,_0x50dfb2){try{_0xe42b77(JSON['parse'](_0x50dfb2));}catch(_0x4cfe67){console[_0x56ae('0x2')](_0x4cfe67);}});}[_0x56ae('0x10')](_0xd5b662){console[_0x56ae('0x2')](_0x56ae('0x11'),this[_0x56ae('0xd')],'MESSAGE:\x20',_0xd5b662);this[_0x56ae('0x6')][_0x56ae('0x10')](this[_0x56ae('0xd')],JSON[_0x56ae('0x12')](_0xd5b662));}}module[_0x56ae('0x13')]=MQTTBroker;