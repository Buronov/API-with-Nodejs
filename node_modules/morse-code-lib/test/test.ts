import { MorseCode } from '../src/app';
import { expect } from 'chai';

describe('MorseCode Encode', () => {
  
  it('Should return an invalid message with invalid separator (°)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '°')).to.equal('Invalid Separator');
  });

  it('Should return an empty string with empty input', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('')).to.equal('');
  });

  it('Should return an empty string with invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('# $ % - ! + = ? < > ~ | { } [ ] * ^')).to.equal('');
  });

  it('Should return only valid values despite the string has invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('# $ % - ! + = ? < > ~ | { } [ ] * ^ Hello')).to.equal('.... . .-.. .-.. ---');
  });

  // Space is the default separator
  it('Should return valid value with default separator (.... . .-.. .-.. ---) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello')).to.equal('.... . .-.. .-.. ---');
  });

  it('Should return valid value with default separator (.... . .-.. .-.. ---  .-- --- .-. .-.. -..) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World')).to.equal('.... . .-.. .-.. ---  .-- --- .-. .-.. -..');
  });

  it('Should return valid value with default separator (..--- ..---  .---- -----) with 22 10 numbers', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('22 10')).to.equal('..--- ..---  .---- -----');
  });

  // Custom separator is the user indication
  it('Should return valid value with custom separator (...././.-../.-../---) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '/')).to.equal('...././.-../.-../---');
  });

  it('Should return valid value with custom separator (...././.-../.-../--- .--/---/.-./.-../-..) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '/')).to.equal('...././.-../.-../---/ .--/---/.-./.-../-..');
  });

  // Integrated separator is a previows and special separator preconfigured

  // Parenthesis
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-pa')).to.equal('(....) (.) (.-..) (.-..) (---)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--parenthesis')).to.equal('(....) (.) (.-..) (.-..) (---)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-pa')).to.equal('(....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--parenthesis')).to.equal('(....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)');
  });

  // Sharp
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-sh')).to.equal('#....# #.# #.-..# #.-..# #---#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--sharp')).to.equal('#....# #.# #.-..# #.-..# #---#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-sh')).to.equal('#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--sharp')).to.equal('#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#');
  });

  // Asterisk
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-as')).to.equal('*....* *.* *.-..* *.-..* *---*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--asterisk')).to.equal('*....* *.* *.-..* *.-..* *---*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-as')).to.equal('*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--asterisk')).to.equal('*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*');
  });

  // Pipe
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-pi')).to.equal('|....| |.| |.-..| |.-..| |---|');
  });
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--pipe')).to.equal('|....| |.| |.-..| |.-..| |---|');
  });
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-pi')).to.equal('|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|');
  });
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--pipe')).to.equal('|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|');
  });
});

describe('MorseCode Decode', () => {

  it('Should return an empty string with empty input', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('')).to.equal('');
  });

  it('Should return an empty string with invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('# $ % ! + = ? < > ~ | { } [ ] * ^')).to.equal('');
  });

  it('Should return only valid values despite the string has invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('# $ % ! + = ? < > ~ | { } [ ] * ^ .... . .-.. .-.. ---')).to.equal('hello');
  });

  // Space is the default separator
  it('Should return Hello word with default separator (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---')).to.equal('hello');
  });

  it('Should return Hello World with default separator (.... . .-.. .-.. ---  .-- --- .-. .-.. -..)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..')).to.equal('hello world');
  });

  it('Should return 22 10 with default separator (..--- ..---  .---- -----)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('..--- ..---  .---- -----')).to.equal('22 10');
  });

  // Custom separator is the user indication
  it('Should return Hello with custom separator (...././.-../.-../---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('...././.-../.-../---')).to.equal('hello');
  });

  it('Should return Hello World with custom separator (...././.-../.-../--- .--/---/.-./.-../-..)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('...././.-../.-../---/ .--/---/.-./.-../-..')).to.equal('hello world');
  });

  // Integrated separator Decoder

  // Parenthesis
  it('Should return hello with integrated separator ((....) (.) (.-..) (.-..) (---))', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('(....) (.) (.-..) (.-..) (---)')).to.equal('hello');
  });

  it('Should return hello world with integrated separator ((....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..))', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('(....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)')).to.equal('hello world');
  });

  // Sharp
  it('Should retur hello with integrated separator (#....# #.# #.-..# #.-..# #---#)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('#....# #.# #.-..# #.-..# #---#')).to.equal('hello');
  });

  it('Should return hello world with integrated separator (#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#')).to.equal('hello world');
  });

  // Asterisk
  it('Should return hello with integrated separator (*....* *.* *.-..* *.-..* *---*)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('*....* *.* *.-..* *.-..* *---*')).to.equal('hello');
  });

  it('Should return hello world with integrated separator (*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*')).to.equal('hello world');
  });

  // Pipe
  it('Should return hello with integrated separator (|....| |.| |.-..| |.-..| |---|)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('|....| |.| |.-..| |.-..| |---|')).to.equal('hello');
  });

  it('Should return hello world with integrated separator (|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|')).to.equal('hello world');
  });

  // Text conventions - LowerCase as Default

  it('Should return Hello World with default text convention (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..', '-lc')).to.equal('hello world');
  });

  it('Should return Hello World with default text convention (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..', '--lowerCase')).to.equal('hello world');
  });

  // UpperCase
  it('Should return Hello World with default text convention (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..', '-uc')).to.equal('HELLO WORLD');
  });

  it('Should return Hello World with default text convention (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..', '--upperCase')).to.equal('HELLO WORLD');
  });

  // PascalCase
  it('Should return Hello World with default text convention (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..', '-pc')).to.equal('Hello World');
  });

  it('Should return Hello World with default text convention (.... . .-.. .-.. ---)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseDecode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..', '--pascalCase')).to.equal('Hello World');
  });
});