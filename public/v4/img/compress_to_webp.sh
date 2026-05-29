#!/bin/bash

# Dossier source et de sortie
SOURCE_DIR="./"
OUTPUT_DIR="./compressed"

# Crée le dossier de sortie s'il n'existe pas
mkdir -p "$OUTPUT_DIR"

# Boucle sur chaque image du dossier
for file in "$SOURCE_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  # Vérifie que le fichier existe
  [ -e "$file" ] || continue
  
  # Nom du fichier sans extension
  filename=$(basename "$file")
  name="${filename%.*}"
  
  # Conversion vers WebP avec bonne qualité
  ffmpeg -i "$file" -q:v 50 "$OUTPUT_DIR/$name.webp"
  
  echo "✅ $filename compressé en $OUTPUT_DIR/$name.webp"
done

echo "🎉 Conversion terminée ! Les fichiers se trouvent dans : $OUTPUT_DIR"

