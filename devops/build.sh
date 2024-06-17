#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

CURRENT_DIR=$PWD

npm run installMongo
npm run installALl

npm run pipeline-lint
# ...etc

cd $CURRENT_DIR/protectedClientsToS3
python -m venv .venv
python -m pip install -r ./layer/requirements.txt