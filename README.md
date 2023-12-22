# Quasar App (quasar-project)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).


## Instructions CI/CD

### CI (Pull Requests)
- Pour tester une Pull Request, rien de spécial à faire. GitHub Actions s'en chargera automatiquement.

### CD (Branche Principale)
- Les déploiements sur la branche principale se déclenchent automatiquement après des tests réussis.
- Aucune action requise de la part du développeur.

### Livraison Continue (Tags Git)
- Pour déclencher la livraison continue, créez un nouveau tag Git avec la version souhaitée.

  ```bash
  git tag -a v1.0.0 -m "Version 1.0.0"
  git push origin v1.0.0
  ```
