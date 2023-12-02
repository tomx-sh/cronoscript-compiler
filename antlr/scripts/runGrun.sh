#!/bin/zsh

#Execute chmod +x runGrun.sh to make the script executable

source ./config.sh

cd ../javaParser
echo "Running grun..."
java -cp ".:$ANTLR_JAR" org.antlr.v4.gui.TestRig $GRAMMAR_NAME $RULE_NAME -gui $INPUT_FILE