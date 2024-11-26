# [coin-society.eth](https://coin-society.org) - Source code

[Home](/README.md) | [**Source code**](/website/) | [Contributor documentation](/CONTRIBUTING.md)

## Getting started

```bash
git clone git@github.com:cromatikap/coin-society.git && cd coin-society/website
npm install
npm run dev
```

## Production release

**Standalone**
```bash
npm run build
npm run start
```

**Docker image**
```bash
docker build -t coin-society-website . 
docker run -p 3000:3000 coin-society-website
```