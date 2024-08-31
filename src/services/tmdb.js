import axios from 'axios';

// Configuração base da API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fa8ea556177c0c06e3a8b381241ea5ca'; // Armazene a chave da API em uma variável de ambiente

// Instância do axios configurada para o TMDB
const tmdbAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR', // Configuração de idioma padrão
  },
});

// Função para buscar filmes pelo título
export const searchMovies = async (query) => {
  try {
    const response = await tmdbAPI.get('/search/movie', {
      params: { query }, // Passa o termo de busca como parâmetro
    });
    return response.data.results; // Retorna os filmes encontrados
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error; // Repassa o erro para ser tratado no componente
  }
};
