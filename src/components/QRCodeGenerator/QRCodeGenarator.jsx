import { useState, useCallback } from 'react'; // Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import QRCode from 'qrcode.react'; // Importa o componente QRCode da biblioteca qrcode.react para gerar códigos QR.
import { Container, Title, Input, QRCodeContainer } from './QRCodeGenerator.styled'; // Importa os estilos do QRCodeGenerator

// Função de validação do texto para QR Code
const validateText = (text) => {
  // Adiciona validações simples, como evitar strings vazias
  return text.trim().length > 0;
};

// Define o componente funcional QRCodeGenerator.
const QRCodeGenerator = () => {
  const [text, setText] = useState(''); // Estado para armazenar o texto inserido pelo usuário
  const [isValid, setIsValid] = useState(true); // Estado para controlar a validade do texto
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro

  // Função de tratamento de mudança do input
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    
    // Valida o texto inserido
    if (validateText(value)) {
      setIsValid(true);
      setError('');
    } else {
      setIsValid(false);
      setError('O texto não pode ser vazio.');
    }
    
    setText(value);
  }, []);

  return (
    <Container>
      {/* Exibe o título do gerador de QR Code */}
      <Title>QR Code Generator</Title>
      {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
      <Input
        type="text"
        value={text} // Define o valor do input como o texto do estado.
        onChange={handleInputChange} // Atualiza o estado 'text' com validação quando o valor do input muda.
        placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
      />
      {/* Exibe uma mensagem de erro se o texto não for válido */}
      {!isValid && <p style={{ color: 'red' }}>{error}</p>}
      {/* Renderiza o QRCode apenas se 'text' não estiver vazio e for válido */}
      {isValid && text.trim() && (
        <QRCodeContainer>
          <QRCode value={text} size={256} /> {/* Gera o QR Code com o texto atual e tamanho 256px */}
        </QRCodeContainer>
      )}
    </Container>
  );
};

// Exporta o componente QRCodeGenerator para que possa ser utilizado em outras partes da aplicação.
export default QRCodeGenerator;
