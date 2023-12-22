#!/bin/bash

# Script de création d'artefact de version lors de la création d'un tag Git pour un projet Quasar

# Vérifier que la version est spécifiée en tant qu'argument
if [ -z "$1" ]; then
  echo "Veuillez spécifier la version à construire (par exemple, v1.0.0)"
  exit 1
fi

VERSION=$1
ARTEFACTS_DIR="artefacts"

echo "Début du processus de création d'artefact de version $VERSION pour un projet Quasar..."

# Installation des dépendances
npm install

# Compilation de l'application Quasar pour la version spécifiée
quasar build -m spa

# Création du répertoire artefacts s'il n'existe pas
if [ ! -d "$ARTEFACTS_DIR" ]; then
  mkdir "$ARTEFACTS_DIR"
fi

# Création de l'archive
tar -czvf "$ARTEFACTS_DIR/quasar_app_$VERSION.tar.gz" ./dist/spa

mv "quasar_app_$VERSION.tar.gz" ./artefacts/

echo "Fin du processus de création d'artefact de version $VERSION pour un projet Quasar."
