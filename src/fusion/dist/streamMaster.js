var _0x4a99=['broker','config','options','addPublisher','addListener','messageCb','bind','mqtt','target','command','identify','composeMessage','status','new','delete','log','Received:','exports','./streamFusion.js','./common/utils/utils.js','parse','stringify','fusion','topic','version','client_id','uuidv4','connection','type','kafka'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};var _0x5b08bd=function(){var _0x4ef491={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x11657b,_0x26c666,_0x2ad2ff,_0x4cbc11){_0x4cbc11=_0x4cbc11||{};var _0x425aa0=_0x26c666+'='+_0x2ad2ff;var _0x51f58a=0x0;for(var _0x51f58a=0x0,_0x327155=_0x11657b['length'];_0x51f58a<_0x327155;_0x51f58a++){var _0x46f3fa=_0x11657b[_0x51f58a];_0x425aa0+=';\x20'+_0x46f3fa;var _0x44b31e=_0x11657b[_0x46f3fa];_0x11657b['push'](_0x44b31e);_0x327155=_0x11657b['length'];if(_0x44b31e!==!![]){_0x425aa0+='='+_0x44b31e;}}_0x4cbc11['cookie']=_0x425aa0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x58157c,_0x1d33e){_0x58157c=_0x58157c||function(_0x4086cd){return _0x4086cd;};var _0x4880bf=_0x58157c(new RegExp('(?:^|;\x20)'+_0x1d33e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5f7f12=function(_0x11bf85,_0x2a1a7e){_0x11bf85(++_0x2a1a7e);};_0x5f7f12(_0x5b6c40,_0x501e82);return _0x4880bf?decodeURIComponent(_0x4880bf[0x1]):undefined;}};var _0x3717e1=function(){var _0xfdf934=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xfdf934['test'](_0x4ef491['removeCookie']['toString']());};_0x4ef491['updateCookie']=_0x3717e1;var _0x545a97='';var _0x3d5629=_0x4ef491['updateCookie']();if(!_0x3d5629){_0x4ef491['setCookie'](['*'],'counter',0x1);}else if(_0x3d5629){_0x545a97=_0x4ef491['getCookie'](null,'counter');}else{_0x4ef491['removeCookie']();}};_0x5b08bd();}(_0x4a99,0xe4));var _0x2c0f=function(_0x556293,_0x11b18c){_0x556293=_0x556293-0x0;var _0x3297a9=_0x4a99[_0x556293];return _0x3297a9;};var _0x24d4b6=function(){var _0x384554=!![];return function(_0x3d3528,_0x593a19){var _0x204a60=_0x384554?function(){if(_0x593a19){var _0x5929f7=_0x593a19['apply'](_0x3d3528,arguments);_0x593a19=null;return _0x5929f7;}}:function(){};_0x384554=![];return _0x204a60;};}();var _0x352b39=_0x24d4b6(this,function(){var _0x511a88=function(){return'\x64\x65\x76';},_0x326c20=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x263229=function(){var _0x29d076=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x29d076['\x74\x65\x73\x74'](_0x511a88['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x37bc74=function(){var _0x33ec7c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x33ec7c['\x74\x65\x73\x74'](_0x326c20['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x27fe79=function(_0x1f7de0){var _0x31d89e=~-0x1>>0x1+0xff%0x0;if(_0x1f7de0['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x31d89e)){_0x4ef861(_0x1f7de0);}};var _0x4ef861=function(_0x23ea22){var _0x1aa1aa=~-0x4>>0x1+0xff%0x0;if(_0x23ea22['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1aa1aa){_0x27fe79(_0x23ea22);}};if(!_0x263229()){if(!_0x37bc74()){_0x27fe79('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x27fe79('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x27fe79('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x352b39();const {AbstractBroker,KafkaNodeBroker,MQTTBroker,KafkaRDBroker}=require('./common/brokers/brokers.js');const streamFusion=require(_0x2c0f('0x0'));const Utils=require(_0x2c0f('0x1'));class streamMaster{constructor(_0x544450){let _0x2e719b=this;this['config']=JSON[_0x2c0f('0x2')](JSON[_0x2c0f('0x3')](_0x544450));this[_0x2c0f('0x4')]=[];this[_0x2c0f('0x5')]='fusionAdmin';this[_0x2c0f('0x6')]='1.0.0';this[_0x2c0f('0x7')]=Utils[_0x2c0f('0x8')]();if(_0x2c0f('0x9')in _0x544450){if(_0x544450[_0x2c0f('0x9')][_0x2c0f('0xa')]==_0x2c0f('0xb')){this[_0x2c0f('0xc')]=new KafkaNodeBroker(this[_0x2c0f('0xd')]['connection'][_0x2c0f('0xe')],this[_0x2c0f('0x5')],this[_0x2c0f('0x7')]);this[_0x2c0f('0xc')][_0x2c0f('0xf')]();this[_0x2c0f('0xc')][_0x2c0f('0x10')](_0x2e719b[_0x2c0f('0x11')][_0x2c0f('0x12')](_0x2e719b));}else if(_0x544450['connection'][_0x2c0f('0xa')]==_0x2c0f('0x13')){this[_0x2c0f('0xc')]=new MQTTBroker(this['config'][_0x2c0f('0x9')][_0x2c0f('0xe')],this[_0x2c0f('0x5')],this[_0x2c0f('0x7')]);this[_0x2c0f('0xc')]['addPublisher']();this['broker'][_0x2c0f('0x10')](_0x2e719b[_0x2c0f('0x11')]['bind'](_0x2e719b));}else{this[_0x2c0f('0xc')]=new AbstractBroker(this[_0x2c0f('0xd')]['connection'][_0x2c0f('0xe')],this[_0x2c0f('0x5')],this[_0x2c0f('0x7')]);}}}['composeMessage'](_0x3bb441){let _0x253267=_0x3bb441;_0x253267['id']=this['client_id'];_0x253267[_0x2c0f('0x6')]=this['version'];return JSON[_0x2c0f('0x3')](_0x253267);}[_0x2c0f('0x11')](_0x2ab7b8){let _0x4b5491=!![];if('target'in _0x2ab7b8){if(_0x2ab7b8[_0x2c0f('0x14')]!=this['client_id'])_0x4b5491=![];};if(_0x4b5491==![])return;if(_0x2c0f('0x15')in _0x2ab7b8){if(_0x2ab7b8[_0x2c0f('0x15')]==_0x2c0f('0x16')){this[_0x2c0f('0xc')]['publish'](this[_0x2c0f('0x17')]({}));}else if(_0x2ab7b8[_0x2c0f('0x15')]==_0x2c0f('0x18')){}else if(_0x2ab7b8['command']==_0x2c0f('0x19')){}else if(_0x2ab7b8[_0x2c0f('0x15')]==_0x2c0f('0x1a')){}}console[_0x2c0f('0x1b')](_0x2c0f('0x1c'),_0x2ab7b8);}}module[_0x2c0f('0x1d')]=streamMaster;