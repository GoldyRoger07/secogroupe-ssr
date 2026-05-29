#!/bin/bash

# Crée le dossier "small" s'il n'existe pas


# Parcourt tous les fichiers image du dossier
for img in *.webp; do
  # Vérifie si le fichier existe réellement
  [ -f "$img" ] || continue

  # Extrait le nom sans extension et l'extension
  filename="${img%.*}"
  extension="${img##*.}"

  # Définit le nom du fichier de sortie
  output="${filename}_512.${extension}"

  # Exécute la commande ffmpeg pour créer une version réduite
  ffmpeg -i "$img" -vf scale=512:-1 "$output" -y

  echo "✅ $img → $output"
done

echo "✅ Toutes les images ont été traitées !"
