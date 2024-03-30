#!/bin/zsh

#Execute chmod +x makeJavaParser.sh to make the script executable

source ./config.sh

echo "Generating java parser in $OUTPUT_DIR"
java -jar $ANTLR_JAR $GRAMMAR_FILE -o $OUTPUT_DIR -Xexact-output-dir
cd $OUTPUT_DIR
echo "Compiling java parser..."
javac -cp ".:$ANTLR_JAR" *.java