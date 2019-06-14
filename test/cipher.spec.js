describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    // Hacker edition encode offset negativo mayúsculas
    it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -33', () => {
      assert.equal(cipher.encode(-33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRS");
    });
    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg"  para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
    });
     // Hacker edition encode offset negativo minúsuculas
     it('debería retornar "tuvwxyzabcdefghijklmnopqrs"  para "abcdefghijklmnopqrstuvwxyz" con offset -33', () => {
      assert.equal(cipher.encode(-33, 'abcdefghijklmnopqrstuvwxyz'), 'tuvwxyzabcdefghijklmnopqrs');
    });
    //
    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    it('debería retornar "*+)" para " !@" con offset 10', () => {
      assert.equal(cipher.encode(10, ' !@'),'*+)');
    });
    // Hacker edition encode offset negativo simbolos
    it('debería retornar "786" para " !@" con offset -10', () => {
      assert.equal(cipher.encode(-10, ' !@'),'786');
    });
    // Hacker edition 2
    it('debería retornar "ëûóÛ" para "áñéÑ" con offset 10', () => {
      assert.equal(cipher.encode(10, 'áñéÑ'),'ëûóÛ');
    });
    // Hacker edition encode offset negativo simbolos2
    it('debería retornar "×çßÇ" para "áñéÑ" con offset -10', () => {
      assert.equal(cipher.encode(-10, 'áñéÑ'),'×çßÇ');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    // Hacker edition decode offset negativo mayúsculas
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "TUVWXYZABCDEFGHIJKLMNOPQRS" con offset -33', () => {
      assert.equal(cipher.decode(-33, "TUVWXYZABCDEFGHIJKLMNOPQRS"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    //
    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
    });
    // Hacker edition decode offset negativo minúsculas
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "tuvwxyzabcdefghijklmnopqrs" con offset -33', () => {
      assert.equal(cipher.decode(-33, 'tuvwxyzabcdefghijklmnopqrs'), 'abcdefghijklmnopqrstuvwxyz');
    });
    //
    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    it('debería retornar " !@" para "*+)" con offset 10', () => {
      assert.equal(cipher.decode(10, '*+)'),' !@');
    });
    // Hacker edition decode offset negativo simbolos
     it('debería retornar "453" para "*+)" con offset -10', () => {
      assert.equal(cipher.decode(-10, '*+)'),'453');
    });
    // Hacker edition 2
    it('debería retornar "áñéÑ" para "ëûóÛ" con offset 10', () => {
      assert.equal(cipher.decode(10, 'ëûóÛ'),'áñéÑ');
    });
     // Hacker edition decode offset negativo simbolos2
     it('debería retornar "áñéÑ" para "×çßÇ" con offset -10', () => {
      assert.equal(cipher.decode(-10, '×çßÇ'),'áñéÑ');
    });
  });

});
