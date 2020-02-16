#!/bin/sh
echo "Building strava-goals-psql"
docker build -t strava-goals-psql -f ../strava-goals-psql/Dockerfile ../strava-goals-psql/

echo "Building strava-goals-api"
docker build -t strava-goals-api -f ../strava-goals-api/Dockerfile ../strava-goals-api/

echo "Done building images"