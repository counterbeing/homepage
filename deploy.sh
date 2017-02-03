#!/usr/bin/env bash

mkdir -p .deploy
rm -rf .deploy/*
cp -R homepage/build/ .deploy/
cp -R bits/build .deploy/bits
cp -R old_map/deploy .deploy/map
aws s3 sync .deploy s3://corylogan-homepage
