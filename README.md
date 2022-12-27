# games-store

## Api Documentation

```GET``` ```https://games-store-f2rb.onrender.com/``` index. <br>
```GET``` ```https://games-store-f2rb.onrender.com/game``` get all games without details. <br>
```GET``` ```https://games-store-f2rb.onrender.com/genre``` get all genres. <br>
```GET``` ```https://games-store-f2rb.onrender.com/game-genre``` get all game with genres. <br>
```GET``` ```https://games-store-f2rb.onrender.com/game/details/:id``` get specific game with details. <br>
```GET``` ```https://games-store-f2rb.onrender.com/game/details``` get all games with details. <br>
```GET``` ```https://games-store-f2rb.onrender.com/game/delete/:id``` delete specific game by id. <br>
```GET``` ```https://games-store-f2rb.onrender.com/game-genre/delete/:id``` delete specific relation between a game and a genre by id. <br>
```GET``` ```https://games-store-f2rb.onrender.com/genre/delete/:id``` delete specific genre by id. <br><br>
```POST``` ```https://games-store-f2rb.onrender.com/game/add``` add a game with details. <br>
```POST``` ```https://games-store-f2rb.onrender.com/genre/add``` add a genre. <br>
```POST``` ```https://games-store-f2rb.onrender.com/game-genre/add``` add a relation between a game and a genre. <br>
```POST``` ```https://games-store-f2rb.onrender.com/game/update/:id``` update specific game (include details) by id. <br>
```POST``` ```https://games-store-f2rb.onrender.com/genre/update/:id``` update specific genre only by id. <br>
