# Spoutoufy
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
        
```


## 5 EntityRelationUML :  
```mermaid
erDiagram
    Album{
        name TEXT
    }
    Music_images{
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
