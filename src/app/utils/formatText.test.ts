import formatText from './formatText';

describe('formatText', () => {
  const casos: [string, string][] = [
    ['1 T 26 BE 04 E', '26 BE 04 E'],
    ['1E T 01 CD 03 A', '01 CD 03 A'],
    ['1TA T 14 AD 02 K', '14 AD 02 K'],
    ['1PA T 36 CE 01 A', '36 CE 01 A'],
    ['SX T 11 ED 01 A', '11 ED 01 A'],
    ['1X T 04 BE 01 A', '04 BE 01 A'],
    ['1W T VI TRI NE I', 'VI TRI NE I'],
    ['1W T 18 DE 01 A', '18 DE 01 A'],
    ['1EC T 05 BE 07 A', '05 BE 07 A'],
    ['1B T 02 AD 03 A', '02 AD 03 A'],
    ['1 T VI TRI NE B', 'VI TRI NE B'],
    ['1E T 01 AE 01 A1', '01 AE 01 A1'],
    ['1K T 21 CE 03 D', '21 CE 03 D'],
  ];

  it.each(casos)('"%s" -> "%s"', (entrada, esperado) => {
    expect(formatText(entrada)).toBe(esperado);
  });

  it('retorna o texto original quando não há o separador "T"', () => {
    expect(formatText('ABC 123')).toBe('ABC 123');
  });
});
