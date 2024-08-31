import { useState, useCallback } from 'react'; // Importa o hook useState e useCallback do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Container, Title, Input, Button, ResultsContainer } from './IPAddressFinder.styled'; // Importa os estilos do IPAddressFinder

// Componente principal IPAddressFinder
const IPAddressFinder = () => {
  const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para buscar os dados do IP
  const findIP = useCallback(async () => {
    if (!ip || !/^(\d{1,3}\.){3}\d{1,3}$/.test(ip) && // IPv4
      !/^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){1,6}|:):([0-9a-fA-F]{1,4}:){1,6}[0-9a-fA-F]{1,4}$/.test(ip) // IPv6
      ) {
      setError("Por favor, insira um IP válido(IPv4 ou IPv6).");
      setIpData(null); // Limpa os dados do IP se a validação falhar
      return;
    }
    
  
    setLoading(true);
    setError(null);
  
    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
      setIpData(response.data); // Armazena os dados da resposta no estado ipData
    } catch (error) {
      if (error.message.includes('Network Error')) {
        setError("Erro de rede. Por favor verifique sua conexão ou desabilide bloqueadores de anúncio caso tenha algum.");
      } else {
        setError("Um erro inesperado aconteceu. Por favor tente novamente mais tarde.");
      }
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }, [ip]);
  

  return (
    <Container>
      <Title>IP Address Finder</Title>
      <Input
        type="text"
        value={ip} // Valor do campo de entrada é ligado ao estado ip
        onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
        placeholder="Enter IP address" // Placeholder do campo de entrada
      />
      <Button onClick={findIP} disabled={loading}>Find IP</Button> {/* Botão que chama a função findIP quando clicado */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
        <ResultsContainer>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.city || 'N/A'}, {ipData.region || 'N/A'}, {ipData.country || 'N/A'}</p>
          <p><strong>ISP:</strong> {ipData.org || 'N/A'}</p>
        </ResultsContainer>
      )}
    </Container>
  );
};

export default IPAddressFinder; // Exporta o componente IPAddressFinder como padrão
