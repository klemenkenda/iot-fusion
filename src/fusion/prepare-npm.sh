# clear dist directory
cd dist
rm * -rf
cd ..

# copy files to dist directory
cp *.js ./dist
cp package.json ./dist
cp conf ./dist -r
cp nodes ./dist -r
cp tests ./dist -r
cp models ./dist -r
mkdir ./dist/common
cp ../common/utils ./dist/common/utils -r
cp ../common/brokers ./dist/common/brokers -r
mkdir ./dist/data
echo Holder > ./dist/data/holder.txt

# obfuscate
cd dist
rm index.js
javascript-obfuscator streamFusion.js --output streamFusion.js --self-defending true --compact true
javascript-obfuscator streamMaster.js --output streamMaster.js --self-defending true --compact true

javascript-obfuscator models/IncrementalLearning.js --output models/IncrementalLearning.js --self-defending true --compact true
javascript-obfuscator models/EMA.js --output models/EMA.js --self-defending true --compact true
javascript-obfuscator models/StructuredEMA.js --output models/StructuredEMA.js --self-defending true --compact true
javascript-obfuscator models/abstractIncrementalModel.js --output models/abstractIncrementalModel.js --self-defending true --compact true

javascript-obfuscator nodes/streamingNode.js --output nodes/streamingNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingAirQualityNode.js --output nodes/streamingAirQualityNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingEnergyNode.js --output nodes/streamingEnergyNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingSmartLampNode.js --output nodes/streamingSmartLampNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingStaticNode.js --output nodes/streamingStaticNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingSubstationNode.js --output nodes/streamingSubstationNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingTimeValueNode.js --output nodes/streamingTimeValueNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingTrafficCounterNode.js --output nodes/streamingTrafficCounterNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingTrainNode.js --output nodes/streamingTrainNode.js --self-defending true --compact true
javascript-obfuscator nodes/streamingWeatherNode.js --output nodes/streamingWeatherNode.js --self-defending true --compact true
javascript-obfuscator nodes/staticCalculatedNode.js --output nodes/staticCalculatedNode.js --self-defending true --compact true
rm nodes/streamingSpecialNodeTemplate.js
javascript-obfuscator conf/smartmeter_pc.js --output conf/smartmeter_pc.js --self-defending true --compact true
javascript-obfuscator conf/smartmeter_pg.js --output conf/smartmeter_pg.js --self-defending true --compact true
javascript-obfuscator conf/train.js --output conf/train.js --self-defending true --compact true
javascript-obfuscator conf/substation.js --output conf/substation.js --self-defending true --compact true
javascript-obfuscator common/brokers/abstract.js --output common/brokers/abstract.js --self-defending true --compact true
javascript-obfuscator common/brokers/brokers.js --output common/brokers/brokers.js --self-defending true --compact true
javascript-obfuscator common/brokers/kafka-node.js --output common/brokers/kafka-node.js --self-defending true --compact true
javascript-obfuscator common/brokers/mqtt.js --output common/brokers/mqtt.js --self-defending true --compact true
javascript-obfuscator common/brokers/node-rdkafka.js --output common/brokers/node-rdkafka.js --self-defending true --compact true

javascript-obfuscator tests/test.1.streamingNode.js --output tests/test.1.streamingNode.js --self-defending true --compact true
javascript-obfuscator tests/test.2.streamingNodeEnergy.js --output tests/test.2.streamingNodeEnergy.js --self-defending true --compact true
javascript-obfuscator tests/test.3.streamingNodeStatic.js --output tests/test.3.streamingNodeStatic.js --self-defending true --compact true
javascript-obfuscator tests/test.4.streamingNodeWeather.js --output tests/test.4.streamingNodeWeather.js --self-defending true --compact true
javascript-obfuscator tests/test.5.streamingNodeSubstation.js --output tests/test.5.streamingNodeSubstation.js --self-defending true --compact true
javascript-obfuscator tests/test.6.streamingNodeTrain.js --output tests/test.6.streamingNodeTrain.js --self-defending true --compact true
javascript-obfuscator tests/test.7.streamingNodeTimeValue.js --output tests/test.7.streamingNodeTimeValue.js --self-defending true --compact true
javascript-obfuscator tests/test.8.streamingNodeSmartLamp.js --output tests/test.8.streamingNodeSmartLamp.js --self-defending true --compact true
javascript-obfuscator tests/test.9.streamingNodeTrafficCounter.js --output tests/test.9.streamingNodeTrafficCounter.js --self-defending true --compact true
javascript-obfuscator tests/test.10.streamingNodeAirQuality.js --output tests/test.10.streamingNodeAirQuality.js --self-defending true --compact true
javascript-obfuscator tests/test.11.staticCalculatedNode.js --output tests/test.11.staticCalculatedNode.js --self-defending true --compact true
javascript-obfuscator tests/test.90.streamFusion.js --output tests/test.90.streamFusion.js --self-defending true --compact true
javascript-obfuscator tests/test.91.streamFusionFactory.js --output tests/test.91.streamFusionFactory.js --self-defending true --compact true
javascript-obfuscator tests/test.99.streamModel.js --output tests/test.99.streamModel.js --self-defending true --compact true

# find replace pointers to common
sed -i 's/..\/common/.\/common/g' streamFusion.js
sed -i 's/..\/common/.\/common/g' streamMaster.js
sed -i 's/..\/..\/common/..\/common/g' nodes/streamingNode.js
sed -i 's/..\/..\/common/..\/common/g' tests/*

cd ..

# publish npm
# npm publish