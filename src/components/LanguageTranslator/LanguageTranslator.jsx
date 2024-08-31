import { useState, useCallback } from 'react'; // Importa o hook useState e useCallback do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Container, Title, Label, Select, Input, Button, TranslatedText} from './LanguageTranslator.styled'; // Importa os estilos do LanguageTranslator

// Componente principal LanguageTranslator
const LanguageTranslator = () => {
  const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
  const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
  const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino
  const [error, setError] = useState(null); // Define o estado para mensagens de erro
  const [loading, setLoading] = useState(false); // Define o estado para mostrar o status de carregamento

  // Função para traduzir o texto
  const translateText = useCallback(async () => {
    // Verifica se o texto está vazio e define uma mensagem de erro se necessário
    if(!text.trim()) {
      setTranslatedText('');
      setError('Por favor, insira um texto para tradução.');
      return;
    }

    setError(null); // Limpa mensagens de erro anteriores
    setLoading(true); // Define o status de carregamento como verdadeiro

    const source = axios.CancelToken.source();  // Cria um token de cancelamento para a requisição

    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text, // Texto a ser traduzido
          langpair: `${sourceLang}|${targetLang}`, // Par de línguas para tradução
        },
        CancelToken: source.token, // Adiciona o token de cancelamento
        timeout: 10000, // Define um timeout de 10 segundos

      });
      setTranslatedText(response.data.responseData.translatedText); // Armazena o texto traduzido no estado translatedText
    } catch (error) {
      if(axios.isCancel(error)) {
        console.log('Request cancelada', error.message); // Loga se a requisição foi cancelada
      } else {
        console.error("Erro ao traduzir o texto:", error); // Exibe um erro no console em caso de falha
        setError('Falha ao traduzir o texto. Por favor tente novamente.');
      }
    } finally {
      setLoading(false); // Define o status de carregamento como falso
    }

    return () => {
      // Faz a limpeza para cancelar a requisição se o componente for desmontado
      source.cancel('Operação cancelada pelo usuário.'); 
    };
  },[text, sourceLang, targetLang]);

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Insira o texto que deseja traduzir." // Placeholder do campo de entrada
      />
      <Button onClick={translateText}>Translate</Button> {/* Botão que chama a função translateText quando clicado */}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>} {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
    </Container>
  );
};

export default LanguageTranslator; // Exporta o componente LanguageTranslator como padrão
