# Run Apache Zookeeper Using Docker

This guide provides a complete, step-by-step process to set up and run [Apache Zookeeper](https://zookeeper.apache.org/) using Docker. Zookeeper is a centralized service for managing distributed applications, commonly used for maintaining configuration information, naming, providing distributed synchronization, and providing group services.

## Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine. If it’s not installed, follow the [official Docker installation guide](https://docs.docker.com/get-docker/).

## Setup Guide

### Step 1: Pull the Zookeeper Docker Image

The first step is to pull the official Zookeeper image from Docker Hub:

```bash
docker pull zookeeper
```

### Step 2: Run Zookeeper in a Docker Container
Run the Zookeeper container and expose it on the default port (2181) using the following command:
```bash
docker run --name zookeeper -p 2181:2181 -d zookeeper

```

```plaintext

Explanation:

--name zookeeper: Assigns the name zookeeper to the container.
-p 2181:2181: Maps port 2181 on the host to port 2181 in the container.
-d: Runs the container in detached mode, allowing it to run in the background.

```

### Step 3: Verify the Zookeeper Container is Running
Check if the Zookeeper container is running by listing active containers:

```bash
docker ps

```

You should see the zookeeper container listed, showing that it’s accessible on localhost:2181.

### Step 4: Test the Zookeeper Connection
To ensure Zookeeper is running and accepting connections, you can either use a Zookeeper client or enter the container shell to run Zookeeper CLI commands:

1. Access the Container Shell:
```bash
docker exec -it zookeeper /bin/bash
```

2. Check Zookeeper Status Inside the Container: Run the following command to check Zookeeper’s status:

```bash
bin/zkServer.sh status
```

This command will display the status of the Zookeeper server.


### Troubleshooting
Port Conflicts: If port 2181 is already in use, you can map Zookeeper to a different port by changing the -p option:

```bash
docker run --name zookeeper -p <your-port>:2181 -d zookeeper
```
Container Not Starting: If Zookeeper fails to start, check the logs for any errors:

```bash
docker logs zookeeper
```


```bash
docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.0.107:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAIN
TEXT://192.168.0.107:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka:latest
```