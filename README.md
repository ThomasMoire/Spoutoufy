# Spoutoufy

### 1 Titre du projet : Spoutoufy

### 2 Description :

Une application d'écoute de musique, de like/dislike. Possibilité de créer ses playlist avec ces titres likés. 
Discuter en live avec des autres utilisateurs, moyen d'abonnement ?

## 3 Case UML : 


![image](https://github.com/ThomasMoire/Spoutoufy/assets/118922067/0358b95c-a66e-46d1-9e8b-92fbe5d9aeee)

## 4 Définir les entités du projet : 

- Utilisateurs 
- Musique => Playlist
- Tchat
- Abonnement ?

## Gantt 

```mermaid
gantt
    title A Gantt Diagram
    dateformat DD-M-YY
    section TimeLine
    Pré-Production   :a1, 25-6-24, 5d
    Production  : a2, 2024-07-01, 4d
    Ajout de Fonctionnalités : a3, 2024-07-04, 30d
    section Pré-Production
    Nom du projet - Description : 2024-06-25 9:00, 1d
    Diagram Usecase  : 2024-06-26 9:00, 1d
    Diagream UML : 2024-06-27 9:00, 1d
    Diagram MCDUML : 2024-06-28 9:00, 1d
    Maquette Figma  : 2024-06-29 9:00, 1d
    section Production
    Création du Back-End : 2024-07-01 9:00, 1d
    Création de File-Upload : 2024-07-02 9:00, 1d
    Création du Front-End : 2024-07-03 9:00, 2d
    
    section Ajout de Fonctionnalités
    Optimisation du Front-End : 2024-07-04, 30d
    Ajout du visuel Music : 2024-07-05, 2d
    Ajout de la page Upload: 2024-07-07, 2h
    Modification Code : 2024-08-08, 20d
    Authentification : 2024-09-01, 15d
    Correction : 2024-09-17, 5d
        
```


## 5 EntityRelationUML :  
```mermaid
erDiagram
       
    User{
        id INT
        username VARCHAR(255)
        password VARCHAR(255)
        email VARCHAR(255)
        birth_date DATETIME
        RoleId INT
    }
    Music{
        id INT
        title VARCHAR(255)
        url TEXT
        author VARCHAR(255)
    }
    Role{
        id INT
        name VARCHAR(255)
    }
    Playlist{
        id INT 
        name VARCHAR(255)
    }
    PlaylistMusic{
        PlaylistId INT
        MusicId INT
  }
    

    Music }|--|| Playlist : has
    PlaylistMusic }| -- }| Playlist : has
    Music }| -- }| PlaylistMusic : has
    Playlist }|--}| Music : has
    User }|--}| Playlist : has
    User ||--|{ Music : has
    User ||--|| Role : has
 
```



## 6 Stack et architecture du projet :
- Angular pour le Front.
- NodeJS/Express pour l'API Rest.
- Sequelize pour SQL.
- Stripe pour le paiement d'abonnement.

## 7 Maquette FIGMA : 
https://www.figma.com/design/ubu4SuQgmNyzccVLJygUGo/Untitled?node-id=203-1475&t=vqKTwJqjSJuRtkq2-1



## 8 Cahier des charges : 
- Page d'accueil :
    * Derniers titres likés.
    * Menu Profil.
    * Nos playlists ?

- Page PROFIL
    * Connexion.
    * Déconnexion.
    * Possibilité de s'abonner ?
       Utilité ? IDK
      
    * Modifie son profil :
      * Name
      * Adress
      * Photo ?
        
    * Rôles :
        * Guest :
              * Possible de tout voir et accès à toutes les fonctionnalités
        * User :
              * ??

- Header avec barre de recherche.
- Différents albums et ses musiques?


- **Priorité pouvoir lire une musique** 
