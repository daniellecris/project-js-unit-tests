const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    const result = productDetails('Alcool Gel','Máscara');
    const param = result;

    // Teste se productDetails é uma função.
    // Consultei toBeInstanceOf no https://stackoverflow.com/
    expect(typeof productDetails).toBe('function'); 
    
    // Teste se o retorno da função é um array.
    // consultei Array.isArray em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    expect(Array.isArray(productDetails())).toBeTruthy();
    
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(result.length).toBe(2);
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    //consultei em https://odesenvolvedor.com.br/verificando-o-tipo-de-um-elemento-no-javascript_1957.html
    expect(typeof productDetails()).toBe('object');
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('produto1', 'produto2')).not.toBe(productDetails('produto1', 'produto2'));
    
    // Teste se os dois productIds terminam com 123.
    // referencia ao Wellington(Tonn) e consulta ao https://jestjs.io/pt-BR/docs/expect#tomatchregexp--string
    expect(param[0].details.productId).toMatch(/123$/);
    expect(param[1].details.productId).toMatch(/123$/);
  });
});
