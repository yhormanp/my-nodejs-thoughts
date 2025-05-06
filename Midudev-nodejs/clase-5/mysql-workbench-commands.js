// -- creacion de base de datos
// DROP DATABASE IF  EXISTS moviesdb;
// CREATE DATABASE moviesdb;

// -- usar
// USE moviesdb;

// -- crear la tabla de movies
// CREATE TABLE movie (
// id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
// title VARCHAR(255) NOT NULL,
// year INT NOT NULL,
// director VARCHAR(255) NOT NULL,
// duration INT NOT NULL,
// poster TEXT,
// rate DECIMAL(2,1) UNSIGNED NOT NULL
// );


// CREATE TABLE genre(
// id INT AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(255) NOT NULL UNIQUE
// );

// CREATE TABLE movie_genre(
// movie_id BINARY(16) REFERENCES movies(id),
// genre_id INT REFERENCES genres(id),
// PRIMARY KEY	(movie_id, genre_id)
// );

// INSERT INTO genre(name) values 
// ('Drama'),
// ('Action'),
// ('Aventura'),
// ('Crime'),
// ('Adventure'),
// ('Sci-fi'),
// ('Romance');


// INSERT INTO movie(id, title, year, director, duration, poster, rate) VALUES
// (UUID_TO_BIN(UUID()), "Inception", 2010, "Christopher Nolan", 180, "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg", 8.8),
// (UUID_TO_BIN(UUID()), "The Shawshank Redemption", 1994, "Frank Darabont", 142, "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp", 9.3),
// (UUID_TO_BIN(UUID()), "The Dark Knight", 2008, "Christopher Nolan", 152, "https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg", 9.0);


// INSERT INTO movie_genre(movie_id, genre_id)
// VALUES
// ((Select id from movie Where title = "Inception"), (Select id from genre Where name = "Sci-fi")),
// ((Select id from movie Where title = "Inception"), (Select id from genre Where name = "Action")),
// ((Select id from movie Where title = "The Shawshank Redemption"), (Select id from genre Where name = "Drama")),
// ((Select id from movie Where title = "The Dark Knight"), (Select id from genre Where name = "Action"));



// Select title, year, director, duration, poster, rate , BIN_TO_UUID(id) from movie;


// select * from movie m join (
// select * from movie_genre join genre where genre_id = id and id = 2
// ) tl where m.id = tl.movie_id;

// select title, year, director, duration, poster, rate , BIN_TO_UUID(m.id) from movie m join 
//         ( select movie_id, genre_id from movie_genre mv join genre g where genre_id = g.id and g.id = 2 ) tl where m.id = tl.movie_id;
        





