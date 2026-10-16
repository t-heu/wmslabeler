// Remove o prefixo do endereço WMS (ex.: "1", "1E", "1TA", "SX", "1EC")
// e o separador "T", exibindo apenas o restante do endereço.
// Ex.: "1TA T 14 AD 02 K" -> "14 AD 02 K"
const formatText = (text: string): string => {
  const value = (text ?? '').toString().trim();
  const match = value.match(/^\S+\s+T\s+(.+)$/i);
  return match ? match[1].trim() : value;
};

export default formatText;
