#!/bin/bash
echo "Installing Alfred Workflow for uitmuntend.de"
zip -r uitmuntend.alfredworkflow *.plist *.js *.xml *.png node_modules/
open uitmuntend.alfredworkflow
