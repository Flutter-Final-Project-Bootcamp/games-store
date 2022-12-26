# games-store

## Api Documentation

```GET``` ```localhost:3000/``` index. <br>
```GET``` ```localhost:3000/game``` get all games without details. <br>
```GET``` ```localhost:3000/genre``` get all genres. <br>
```GET``` ```localhost:3000/game-genre``` get all game with genres. <br>
```GET``` ```localhost:3000/game/details/:id``` get specific game with details. <br>
```GET``` ```localhost:3000/game/details``` get all games with details. <br>
```GET``` ```localhost:3000/game/delete/:id``` delete specific game by id. <br>
```GET``` ```localhost:3000/game-genre/delete/:id``` delete specific relation between a game and a genre by id. <br>
```GET``` ```localhost:3000/genre/delete/:id``` delete specific genre by id. <br><br>
```POST``` ```localhost:3000/game/add``` add a game with details. <br>
```POST``` ```localhost:3000/genre/add``` add a genre. <br>
```POST``` ```localhost:3000/game-genre/add``` add a relation between a game and a genre. <br>
```POST``` ```localhost:3000/game/update/:id``` update specific game (include details) by id. <br>
```POST``` ```localhost:3000/genre/update/:id``` update specific genre only by id. <br>
