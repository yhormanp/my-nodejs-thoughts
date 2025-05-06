import mysql from 'mysql2/promise';

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'moviesdb',
};

const connection = await mysql.createConnection(config);

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase();

      //get genre id from database
      const [genres] = await connection.query(
        'SELECT id, name FROM genre WHERE LOWER(name) =?;',
        [lowerCaseGenre]
      );

      // no genre found
      if (genres.length === 0) return [];
      // get the id from the first genre result
      const [{ id }] = genres;

      // get all movies ids from database table movies genres, join y devolver resultados
      const [moviesByGenre] = await connection.query(
        ` select title, year, director, duration, poster, rate , BIN_TO_UUID(m.id) from movie m join 
        ( select * from movie_genre mv join genre g where genre_id = g.id and g.id = ? ) tl where m.id = tl.movie_id;`,
        [id]
      );
      return moviesByGenre;
    }

    const [movies, tableInfo] = await connection.query(
      `Select title, year, director, duration, poster, rate , BIN_TO_UUID(id) 
      from movie; `
    );

    return movies;
  }

  static async getById({ id }) {
    if (id) {
      //get movie by  id from database
      const [movies] = await connection.query(
        `Select title, year, director, duration, poster, rate , BIN_TO_UUID(id) 
      from movie WHERE id =UUID_TO_BIN(?);`,
        [id]
      );

      return movies[0];
    }

    return null;
  }

  static async create({ input }) {
    const {
      genre: genreInput,
      title,
      year,
      duration,
      director,
      rate,
      poster,
    } = input;

    const [uuidResult] = await connection.query('SELECT UUID() uuid');
    const [{ uuid }] = uuidResult;

    //insert movie
    try {
      await connection.query(
        `
      INSERT INTO movie(id, title, year, director, duration, poster, rate) VALUES
      (UUID_TO_BIN(?),?,?,?,?,?,?,)
      `,
        [uuid, title, year, director, duration, post, rate]
      );
    } catch (error) {
      throw new Error('Error creating movie');
    }

    const [movies] = await connection.query(
      `Select title, year, director, duration, poster, rate , BIN_TO_UUID(id) 
    from movie WHERE id =UUID_TO_BIN(?);`,
      [uuid]
    );
  }

  static async delete({ id }) {
    try {
      await connection('DELETE FROM movie WHERE id=?', [id]);
    } catch (error) {
      throw new Error('Error deleting movie');
    }
  }

  static async update({ id, input }) {
    const {
      genre: genreInput,
      title,
      year,
      duration,
      director,
      rate,
      poster,
    } = input;

    try {
      await connection.query(
        'UPDATE movie SET title = ?, year =?, director = ?, duration = ?, poster =?, rate =?',
        [title, year, director, duration, poster, rate]
      );
    } catch (error) {
      throw new Error('Error updating movie');
    }
  }
}
