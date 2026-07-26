# Doutor Connect

## Importante, antes de tudo

Este sistema **não é WordPress** e não pode funcionar como um tema WordPress
(subir um arquivo e já aparecer pronto). Isso não seria possível com
qualidade em nenhum sistema moderno tipo SaaS — foi uma escolha do seu
próprio briefing, porque WordPress não aguenta o nível de site premium,
assinatura recorrente e multiusuário que você pediu.

O que eu fiz para deixar o mais simples possível: reduzi tudo a **uma única
sequência de passos, na ordem certa**, sem precisar digitar nenhum comando
técnico. Sempre que puder, eu automatizei o passo dentro do próprio sistema
(por exemplo: as tabelas do banco agora se criam sozinhas a cada
publicação — antes isso era um comando manual).

Siga a sequência abaixo, na ordem, sem pular. Leva uns 15 minutos na
primeira vez.

---

## Sequência única de publicação

### 1. Conta no GitHub (guarda o código)
- Crie uma conta grátis em [github.com](https://github.com)
- Clique em **New repository**, dê o nome `doutor-connect`, deixe "Public"
  ou "Private" (tanto faz) e clique em **Create repository**
- Na página que abrir, clique em **uploading an existing file** e arraste
  **todos** os arquivos e pastas desta pasta que te entreguei
- Clique em **Commit changes**

### 2. Conta no Neon (banco de dados grátis)
- Crie uma conta grátis em [neon.tech](https://neon.tech)
- Clique em **Create a project**, aceite os padrões
- Na tela do projeto, copie o valor de **Connection string** (começa com
  `postgresql://`) — vai usar isso já já

### 3. Conta na Vercel (coloca o site no ar)
- Crie uma conta em [vercel.com](https://vercel.com) fazendo login **com o
  GitHub** (mesmo login do passo 1)
- Clique em **Add New → Project**
- Selecione o repositório `doutor-connect` que você criou no passo 1
- Antes de clicar em Deploy, abra a seção **Environment Variables** e
  cole estas três, uma por uma:

  | Nome | Valor |
  |---|---|
  | `DATABASE_URL` | a connection string que você copiou do Neon no passo 2 |
  | `NEXTAUTH_SECRET` | `troque-por-32-letras-e-numeros-aleatorios-aqui` |
  | `NEXTAUTH_URL` | deixe em branco por enquanto, você ajusta depois do deploy |

- Clique em **Deploy**

Pronto. Em 2-3 minutos o site está no ar, com as tabelas do banco já
criadas automaticamente (isso acontece sozinho durante o deploy).

### 4. Ajuste final (1 clique)
- Depois que a Vercel te der o endereço do site (ex:
  `doutor-connect.vercel.app`), volte em **Settings → Environment Variables**
  e edite `NEXTAUTH_URL` colando esse endereço com `https://` na frente
- Clique em **Redeploy**

---

## Pagamentos (só quando você quiser ativar cobrança de verdade)

Isso é opcional para o site ficar no ar — sem essas chaves, tudo funciona
menos o botão de assinar plano. Quando quiser ligar:

1. Crie conta grátis em [stripe.com](https://stripe.com)
2. Em **Developers → API keys**, copie a "Secret key"
3. Volte na Vercel → Environment Variables e cole em `STRIPE_SECRET_KEY`
4. Clique em **Redeploy**

(O webhook do Stripe eu configuro com você quando chegarmos nessa etapa —
não precisa se preocupar com isso agora.)

---

## No dia a dia, depois de tudo no ar

Você **não volta mais no GitHub/Vercel** pra trocar logo, cor, texto da
Home, aprovar profissional ou dar o selo de verificado — tudo isso é dentro
do próprio site, em `/admin`, com cliques normais.

Você só volta nessa sequência técnica se, no futuro, quisermos adicionar uma
funcionalidade nova ao sistema.

---

## Se algo der errado

Me manda print da tela de erro (geralmente aparece na própria Vercel, aba
**Deployments**) que eu leio e te falo exatamente o que corrigir — sem
"ir de picado", resolvemos ali na hora.
