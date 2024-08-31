import { useState, useCallback } from 'react'; // Importa hooks do React
import { Container, Title, Input, Button, MoviesContainer, MovieCard} from './MovieSearchEngine.styled' // Importa os estilos do MovieSearchEngine
import { searchMovies } from '../../services/tmdb'; // Importa a função de busca de filmes do services


// Componente principal MovieSearchEngine
const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento
  const [error, setError] = useState(''); // Estado para mensagens de erro

  // Função para buscar filmes usando o serviço

  const fetchMovies = useCallback(async () => {
    if(!query.trim()) {
      setError('Por favor insira um nome válido de filme.') // Valida a consulta
      return;
    }

    setLoading(true); // Define o loading como true
    setError(''); // Reseta o estado de erro
    setMovies([]) // Limpa os filmes antes da nova busca

    try {
      const movieResults = await searchMovies(query); // Chama o serviço para ele buscar filmes
      setMovies(movieResults) // Armazena os filmes encontrados
    } catch (err) {
      setError('Erro na busca de filmes.')
    } finally {
      setLoading(false); // Define estado
    }
  }, [query]);

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Busque por um filme" // Placeholder do campo de entrada
      />
      <Button onClick={fetchMovies} disabled={loading}>Search</Button> {/* Botão que chama a função searchMovies quando clicado */}
      {error && <Error>{error}</Error>} {/* Exibe uma mensagem de erro se houver */}
      <MoviesContainer>
        {movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
          <MovieCard key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} /> {/* Exibe o pôster do filme */}
            <h3>{movie.title}</h3> {/* Exibe o título do filme */}
            <p>{movie.release_date?.split('-')[0]}</p> {/* Exibe o ano do filme */}
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
