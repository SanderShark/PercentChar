#!/bin/bash

string="$1"
encoded=""

for (( i=0; i<${#string}; i++ )); do
  char="${string:$i:1}"
  encoded="$encoded$(printf "%%%02X" "'$char")"
done

echo "$encoded"
