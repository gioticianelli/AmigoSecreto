# Amigo Secreto
Projeto interativo para sorteio de amigo secreto desenvolvido em JavaScript.

### Link para acesso: https://gioticianelli.github.io/AmigoSecreto/

## Funcionalidades
- Normalização automática de nomes
- Prevenção de nomes duplicados
- Validação de campos vazios
- Sorteio circular garantido
- Tecla Enter para adicionar nomes

## Como Usar

1. **Adicionar Participantes**:
   - Digite o nome no campo de texto
   - Clique em "Adicionar" ou pressione "Enter"
   - Os nomes aparecerão na lista abaixo

2. **Realizar Sorteio**:
   - Adicione pelo menos 2 participantes
   - Clique no botão "Sortear amigo"
   - Os resultados mostrarão quem tirou quem

## Exemplos de Funcionamento

```
Digita: "GIOVANA" → Mostra: "Giovana"
Digita: "maria" → Mostra: "Maria"
Tenta repetir "Giovana" → Alerta: "Este nome já foi adicionado!"
```

## Estrutura do Projeto

```
amigo-secreto/
├── index.html
├── style.css
├── app.js
└── assets/
    └── amigo-secreto.png
```


## Desenvolvido por

Giovana Ticianelli - Como parte do Challenge Amigo secreto fornecido pela Alura
