## Layout Figma
https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter

## Critérios de correção
1) O projeto deve conter os componentes principais (pode haver outros conforme você quiser):
 - Cabeçalho
 - Corpo da tela de listagem
 - Card de filtro
 - Card de listagem
2) A lista de produtos deve ser passada como Prop para o card de listagem.
3) O card de filtro deve emitir um evento onFilter(min, max). Este evento serve para comunicar os preços mínimo
e máximo sempre que o formulário for submetido.
4) Context API utilizada para manter o estado global do número de produtos mostrados na tela. Sempre que
for feita uma nova filtragem e o número de produtos listados mudar, o número deve ser atualizado no cabeçalho.
