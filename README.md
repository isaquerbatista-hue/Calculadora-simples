# Calculadora Simples 

Projeto de uma calculadora simples desenvolvida em **React**, capaz de realizar as quatro operações matemáticas básicas: Soma, Subtração, Multiplicação e Divisão.

---

## Conceitos Aplicados

Neste projeto foram aplicados diversos conceitos fundamentais do desenvolvimento com React e JavaScript:

1. **Gerenciamento de Estado (`useState`):**

   - Utilizado para manipular as entradas dos números (`num1` e `num2`), a operação selecionada (`operacao`) e o resultado exibido na tela (`resultado`).
2. **Manipulação de Eventos (Event Handling):**

   - **`onSubmit`:** Captura o envio do formulário para executar a função de cálculo.
   - **`onChange`:** Atualiza o estado da aplicação em tempo real conforme o usuário digita nos inputs ou seleciona uma opção no `<select>`.
   - **`e.preventDefault()`:** Evita o recarregamento da página ao submeter o formulário.
3. **Lógica de Programação e Validação:**

   - Conversão de strings para números decimais com `parseFloat()`.
   - Estrutura condicional (`switch`) para escolher qual cálculo realizar com base no operador selecionado.
   - Tratamento de exceções e erros básicos (como impedir divisão por zero e validar campos vazios).
4. **Componentização e Estilização:**

   - **CSS Modules (`form.module.css`):** Garante escopo fechado dos estilos, prevenindo conflitos no CSS global da aplicação.
   - **Flexbox:** Utilizado para alinhar e centralizar os elementos do formulário de maneira responsiva.
