# This file is used to configure the antlr4 script.

# The following line is used to import the ANTLR_JAR variable from the .env file
# ANTLR_JAR stores the path to the antlr4 jar file
# It is used to run the makeJavaParser.sh and runGrun.sh scripts
set -a
source ../../.env
set +a

OUTPUT_DIR="../javaParser"
GRAMMAR_NAME="CronoScript"
GRAMMAR_DIR="../grammar"
GRAMMAR_FILE="$GRAMMAR_DIR/$GRAMMAR_NAME.g4"
INPUT_FILE="../testInputs/input.txt"
RULE_NAME="cronodile"