# Backend do catálogo de tênis

API local feita com Node.js e Express. Os registros ficam em um array no arquivo `data/tenis.js`; por isso, ao reiniciar o servidor, os dados voltam aos três exemplos iniciais.

## Executar

No terminal, entre na pasta `backend` e rode:

```bash
npm install
npm run dev
```

A API fica em `http://localhost:3001`. O endpoint `GET /api/check` confirma se ela está ativa.

## Campos de cada tênis

| Campo | Tipo | Regra |
| --- | --- | --- |
| `id` | número | Gerado pela API |
| `nome` | texto | Obrigatório |
| `marca` | texto | Obrigatório |
| `cor` | texto | Obrigatório |
| `preco` | número | Obrigatório, maior ou igual a zero |
| `quantidade` | inteiro | Obrigatório, maior ou igual a zero |
| `imagem` | texto | Opcional |

## Rotas

| Método | Caminho | Ação |
| --- | --- | --- |
| GET | `/api/tenis` | Lista os tênis |
| GET | `/api/tenis/:id` | Busca um tênis |
| POST | `/api/tenis` | Cadastra um tênis |
| PUT | `/api/tenis/:id` | Atualiza todos os campos de um tênis |
| DELETE | `/api/tenis/:id` | Exclui um tênis |

Exemplo de corpo para `POST` ou `PUT`:

```json
{
  "nome": "Air Max 95",
  "marca": "Nike",
  "cor": "Neon",
  "preco": 1299,
  "quantidade": 4,
  "imagem": "https://exemplo.com/tenis.jpg"
}
```

As respostas usam JSON. Em sucesso, a API envia `sucesso: true` e os dados em `dados`; em falha, envia uma mensagem no campo `erro`.
