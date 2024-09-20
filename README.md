# Teste Técnico de Cadastro

## Objetivo do Teste
O objetivo deste teste técnico é avaliar as habilidades do candidato em criar um formulário de cadastro em React com Typescript que interaja com as APIs da ReceitaWS e ViaCEP, incluindo funcionalidades avançadas como exibição condicional de campos, campos com máscara, validação e selects com busca.

## Requisitos do Projeto

### Estrutura do Formulário
O formulário deve conter os seguintes campos, não necessariamente na ordem descrita abaixo:
- **Nome completo** (obrigatório, validar se possui nome e pelo menos um sobrenome)
- **Email** (opcional, validar e-mail válido)
- **Telefone** (opcional, máscara no formato (XX) XXXX-XXXX ou (XX) 9XXXX-XXXX)
- **CEP** (obrigatório, máscara no formato XXXXX-XXX)
- **Endereço** (obrigatório)
- **Número** (obrigatório, preencher “SN” para endereços que não possuam número)
- **Complemento**
- **Bairro** (obrigatório)
- **Estado** (campo select com busca, obrigatório, apenas sigla UF)
- **Cidade** (campo de texto, obrigatório)
- **Tipo de Pessoa** (radio button para pessoa física e pessoa jurídica; pessoa jurídica deve estar marcada por padrão)

### Campos Adicionais Condicionais
- Caso o usuário escolha **pessoa física**, deverá exibir o campo **CPF**.
- Caso a opção escolhida seja **pessoa jurídica**, deverá aparecer os campos **CNPJ**, **Razão social** e **Nome fantasia**.
- Todos os campos condicionais também são obrigatórios.

### Integrações com APIs
- **ViaCEP**: O formulário deve buscar automaticamente os dados de endereço ao preencher o CEP. Os campos trazidos pela API devem estar desabilitados para edição após autopreenchimento.
- **ReceitaWS**: Ao preencher um CNPJ válido, o formulário deve buscar informações adicionais e preencher os campos **Razão social** e **Nome Fantasia**. Esses campos devem estar desabilitados para edição após autopreenchimento.

### Funcionalidades Adicionais
- **Campos com Máscara**: Os campos CEP, CPF, CNPJ e Telefone devem ser formatados com máscara adequada.
- **Validação de Campos**: Utilize `react-hook-form` com `Yup` ou `Zod` para validação dos campos do formulário.
  - CPF/CNPJ deve ser validado com base no formato e se é um número válido.
  - Os campos obrigatórios devem exibir mensagem adequada quando não preenchidos.
- **Exibição Condicional**: Determinados campos devem aparecer ou desaparecer com base nas informações preenchidas em outros campos.

### Estilo e Responsividade
- Utilize uma biblioteca de CSS de sua escolha (ex: Tailwind CSS, styled-components).
- O formulário deve ser responsivo e funcionar bem em diferentes tamanhos de tela.

## Avaliação
Os candidatos serão avaliados com base nos seguintes critérios:
- **Criação de Componentes**: Capacidade de criar componentes reutilizáveis e organizados; uso adequado de props e estados.
- **Integração com APIs**: Correta implementação das integrações com as APIs (ReceitaWS e ViaCEP); tratamento de erros e validação de respostas das APIs.
- **Validação de Formulários**: Implementação correta da validação dos campos utilizando `react-hook-form` com `Yup` ou `Zod`; uso de máscaras e validação de formatos específicos como CPF/CNPJ e CEP.
- **Usabilidade e UX**: O formulário deve ser fácil de usar, com validações e mensagens de erro claras; uso de selects com busca e exibição condicional de campos de forma intuitiva.
- **Organização e Qualidade do Código**: Estrutura clara do projeto; nomenclatura adequada para variáveis, funções e componentes.

## Entrega
O candidato deve entregar o código em um repositório Git público ou privado (com acesso concedido). A documentação deve incluir instruções claras sobre como rodar o projeto localmente.

## Instruções para Rodar o Projeto

### Rodar o Projeto Frontend
1. Clone o repositório:
2. git clone <git@github.com:PamelaGarzon/desafio-guarani.git>
3. npm install
4. npm run dev

### Rodar o Fake Backend
1. npm run start:json-server


