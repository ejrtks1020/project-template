#!/bin/bash
DOCKER_BUILDKIT=1 docker build --target=runtime -t backend -f ../docker/Dockerfile-backend ..
