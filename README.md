# Bubble Sort Visualizer
![scrrenshot](https://github.com/oadcavalcante/bubble-sort-visualizer/blob/main/public/images/screenshot.png)

Um visualizador interativo e fácil de usar do algoritmo Bubble Sort, desenvolvido com Next.js e Tailwind CSS. Este projeto permite entender visualmente o funcionamento de um dos algoritmos de ordenação mais simples e fundamentais.

## 🚀 Tecnologias
* **Next.js:** Framework React para renderização rápida e desenvolvimento de aplicações web.
* **TypeScript:** Superset de JavaScript que adiciona tipos estáticos.
* **Tailwind CSS:** Framework de CSS para estilização rápida e responsiva.

## 📖 O que é o Bubble Sort?
Bubble Sort é um algoritmo de ordenação simples que funciona comparando pares de elementos adjacentes e trocando-os se estiverem na ordem incorreta. O processo é repetido até que o array esteja ordenado.

## Como Funciona?
1. Iniciamos no começo do array e comparamos o primeiro par de elementos.
2. Se o elemento atual é maior que o próximo, eles trocam de lugar.
3. Movemos para o próximo par e repetimos o processo.
4. Após cada "passada" pelo array, o próximo maior elemento "borbulha" para sua posição correta no final do array.
5. O processo é repetido até que não haja mais trocas necessárias.

## Complexidade:
**Pior e caso médio:** O(n²), pois precisa comparar cada par em cada passada.

**Melhor caso:** O(n), se o array já estiver ordenado.

* Exemplo de Bubble Sort
1. Considere o array: [5, 3, 8, 4, 2]
2. Comparação de [5, 3]: troca → [3, 5, 8, 4, 2]
3. Comparação de [5, 8]: sem troca
4. Comparação de [8, 4]: troca → [3, 5, 4, 8, 2]
5. Comparação de [8, 2]: troca → [3, 5, 4, 2, 8]

## 💻 Como Usar o Visualizador
Este visualizador permite que você veja o processo do Bubble Sort em ação. Ao clicar no botão "Iniciar Ordenação", o array inicial é ordenado passo a passo, destacando visualmente cada troca.

## 🛠️ Instalação e Uso
Para instalar e executar o projeto localmente, siga estas etapas:

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/bubble-sort-visualizer.git
cd bubble-sort-visualizer
```

3. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra no navegador:
Acesse http://localhost:3000 para ver o visualizador em ação.

## 🖌️ Personalização
Você pode modificar o array inicial diretamente no componente BubbleSortVisualizer.tsx ou alterar a velocidade da animação ajustando o tempo de atraso em setTimeout.

Exemplo:
```typescript
await new Promise((resolve) => setTimeout(resolve, 200)); // Atraso de 200ms
```

## 📂 Estrutura do Projeto
```plaintext
.
├── components
│   └── BubbleSortVisualizer.tsx  # Componente do visualizador
├── pages
│   └── index.tsx                # Página principal do app
└── styles
    └── globals.css              # Estilos globais (Tailwind)
```

## 🤝 Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests para aprimorar o visualizador!

Divirta-se explorando o Bubble Sort e aprendendo mais sobre algoritmos de ordenação com este visualizador interativo!
