function FormasPagamentos(formaDePagamento, precoAtual) {
  if (formaDePagamento === 1) {
    console.log(precoAtual - precoAtual * 0.1)
  } else if (formaDePagamento === 2) {
    console.log(precoAtual - precoAtual * 0.15)
  } else if (formaDePagamento === 3) {
    console.log(precoAtual)
  } else {
    console.log(precoAtual + precoAtual * 0.1)
  }
};

FormasPagamentos(4, 100);
