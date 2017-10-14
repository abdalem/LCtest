# lcTest

Pour utiliser ce projet

```
git clone https://github.com/abdalem/lcTest.git
cd lcTest
npm install
npm start
```

## Lancer les tests e2e avec Protractor
Une fois que le serveur est démarré, lancer : `npm test`

Si les tests ne se lancent pas correctement, modifier la version de chromedriver (de 2.21 à 2.24) :
`nano node_modules/protractor/config.json`

Puis mettre à jour la version avec webdriver-manager :
`node_modules/protractor/bin/webdriver-manager update`
