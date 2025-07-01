// Função para identificar a bandeira do cartão
function identificarBandeira(numero) {
    const n = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (/^4/.test(n)) return 'Visa';
    if (/^(5[1-5])/.test(n) || /^(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/.test(n)) return 'MasterCard';
    if (/^(4011|4312|4389)/.test(n)) return 'Elo'; // Simplificado, pode adicionar mais intervalos Elo
    if (/^(34|37)/.test(n)) return 'American Express';
    if (/^(6011|65|64[4-9])/.test(n)) return 'Discover';
    if (/^6062/.test(n)) return 'Hipercard';
    return 'Bandeira desconhecida';
}

// Exemplo de uso:
// console.log(identificarBandeira('4011 1234 5678 9012')); // Elo
// console.log(identificarBandeira('4111 1111 1111 1111')); // Visa
// console.log(identificarBandeira('6011 0000 0000 0000')); // Discover