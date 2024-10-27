## After cloning run the below command to run the project

```js
npm install && npm run dev
```

**Now All Set you can open below url to see your page**

```js 
http://localhost:8000

docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.0.107:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAIN
TEXT://192.168.0.107:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka:latest
```
