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

## 5 EntityRelationUML :  
```mermaid
erDiagram
    Album{
        name TEXT
    }
    Review["Review(join)"]{
        rating INT
        content TEXT
    }
    
    User{
        name TEXT
        password TEXT
        email TEXT
        birth_date DATE
    }
    Music{
        url TEXT
    }
    Role{
        name TEXT
        importance INT
    }
    Playlist{
        name TEXT
        limit number
    }
    Compte{
        id number
    }
    Author{
        name TEXT
    }   

    Music }|--|| Album : has
    Review }|--|| User : post
    Playlist }|--}| Music : has
    User }|--}| Playlist : has
    User ||--|{ Music : has
    User ||--|| Role : has
    User ||--|| Compte : has
    Music ||--|| Author : has
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
