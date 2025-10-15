const peliculas = [
   {
    titulo: "El Padrino",
    year: 1972,
    descripcion: "La historia de la familia Corleone.",
    url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    genero: "drama"
  },
  {
    titulo: "El Padrino II",
    year: 1974,
    descripcion: "La continuación de la saga de los Corleone.",
    url: "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
    genero: "drama"
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    year: 2001,
    descripcion: "El inicio de la aventura de Harry en Hogwarts.",
    url: "https://m.media-amazon.com/images/M/MV5BYTkyYjVkNDItODc1Ny00NzA1LTkwY2YtZDUwNTlhMDk3MTZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: "fantasia"
  },
  {
    titulo: "Harry Potter y la cámara secreta",
    year: 2002,
    descripcion: "Harry regresa a Hogwarts y enfrenta nuevos peligros.",
    url: "https://m.media-amazon.com/images/I/51UizOJ+NFL._UF1000,1000_QL80_.jpg",
    genero: "fantasia"
  },
  {
    titulo: "El Rey León",
    year: 1994,
    descripcion: "La historia de Simba y su camino para ser rey.",
    url: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
    genero: "fantasia"
  },
  {
    titulo: "El Rey León 2: El reino de Simba",
    year: 1998,
    descripcion: "La continuación de la historia de Simba con su hijo.",
    url: "https://es.web.img2.acsta.net/pictures/15/06/11/11/59/479737.jpg",
    genero: "fantasia"
  },
  {
    titulo: "It",
    year: 2017,
    descripcion: "Un grupo de niños enfrenta al aterrador payaso Pennywise.",
    url: "https://es.web.img3.acsta.net/medias/nmedia/18/87/80/19/19961693.jpg",
    genero: "terror"
  },
  {
    titulo: "It: Capítulo Dos",
    year: 2019,
    descripcion: "Los mismos personajes regresan de adultos para enfrentar a Pennywise.",
    url: "https://es.web.img3.acsta.net/pictures/19/07/30/09/09/0763744.jpg",
    genero: "terror"
  },
  {
    titulo: "Avengers: Infinity War",
    year: 2018,
    descripcion: "Los héroes del universo Marvel se unen para detener a Thanos.",
    url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
    genero: "accion"
  },
  {
    titulo: "Avengers: Endgame",
    year: 2019,
    descripcion: "La épica conclusión de la saga de los Vengadores.",
    url: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    genero: "accion"
  },
  {
    titulo: "Deadpool",
    year: 2016,
    descripcion: "Un antihéroe con humor negro y poderes de regeneración.",
    url: "https://images.justwatch.com/poster/260157237/s718/deadpool.jpg",
    genero: "accion"
  },
  {
    titulo: "Mi Pobre Angelito",
    year: 1990,
    descripcion: "Un niño se defiende de ladrones mientras su familia está de viaje.",
    url: "https://m.media-amazon.com/images/M/MV5BZDViOTZmYWUtNDI5ZS00N2Y3LWE0YjAtNDA2YTRjM2MwMTY4XkEyXkFqcGc@._V1_QL75_UY207_CR6,0,140,207_.jpg",
    genero: "comedia"
  },
   {
    titulo: "Avatar",
    year: 2009,
    descripcion: "Un ex-marine se une a los Na'vi en Pandora y lucha por proteger su mundo.",
    url: "https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg",
    genero: "fantasia"
  },
  {
    titulo: "Avatar: El camino del agua",
    year: 2022,
    descripcion: "Jake Sully y Neytiri protegen a su familia mientras enfrentan nuevas amenazas en Pandora.",
    url: "https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-mmed.jpg",
    genero: "fantasia"
  },
  {
    titulo: "El Conjuro",
    year: 2013,
    descripcion: "Basado en hechos reales, un matrimonio de investigadores paranormales enfrenta una casa embrujada.",
    url: "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: "terror"
  },
    {
    titulo: "Jurassic Park: Parodia",
    year: 1993,
    descripcion: "Un divertido grupo intenta sobrevivir en un parque lleno de dinosaurios, pero con situaciones cómicas.",
    url: "https://m.media-amazon.com/images/I/711ewSpPgUL._UF1000,1000_QL80_.jpg",
    genero: "comedia"
  },
  {
    titulo: "Shrek",
    year: 2001,
    descripcion: "Un ogro y sus amigos viven aventuras llenas de humor y sátira de cuentos de hadas.",
    url: "https://images.justwatch.com/poster/327088665/s718/shrek.jpg",
    genero: "comedia"
  },
  {
  titulo: "El diario de Noa",
  year: 2004,
  descripcion: "La historia de un amor que perdura a lo largo de los años, enfrentando obstáculos y la memoria del tiempo.",
  url: "https://m.media-amazon.com/images/M/MV5BZmRkMjBlOTEtZjI5OS00NTM5LWFjN2QtZjAyNTJmNTYwNzQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  genero: "drama"
},
 {
    titulo: "Titanic",
    year: 1997,
    descripcion: "Un romance imposible surge entre Jack y Rose a bordo del fatídico Titanic.",
    url: "https://m.media-amazon.com/images/I/71sDqDg3yRL._UF1000,1000_QL80_.jpg",
    genero: "drama"
  },
]; 

export default peliculas; 