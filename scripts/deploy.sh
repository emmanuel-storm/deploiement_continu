#!/bin/bash

# Script pour simuler le processus de déploiement continu sur la branche principale pour un projet Quasar en environnement de développement

echo "Début du processus de déploiement continu sur la branche principale pour un projet Quasar (simulé)..."

# Installation des dépendances
npm install

# Construction de l'application Quasar
quasar build -m spa

# Lancement du serveur local (simulation du déploiement sur un serveur local)
npm start

echo "Fin du processus de déploiement continu sur la branche principale pour un projet Quasar (simulé)."
