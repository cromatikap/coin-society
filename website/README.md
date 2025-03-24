# [coin-society.eth](https://coin-society.org) - Website

[Home](/) | [**Website**](/website/) | [Certification](/certification/) | [Stable Sat](/stable-sat/) | [Contributing](/CONTRIBUTING.md)


[![Continuous Deployment](https://github.com/cromatikap/coin-society/actions/workflows/Continuous-Deployment.yml/badge.svg)](https://github.com/cromatikap/coin-society/actions/workflows/Continuous-Deployment.yml) [![Continuous Integration](https://github.com/cromatikap/coin-society/actions/workflows/Continuous-Integration.yml/badge.svg)](https://github.com/cromatikap/coin-society/actions/workflows/Continuous-Integration.yml)

## Test Coverage

[![Test Coverage](https://github.com/coin-society/coin-society/actions/workflows/Test-Coverage.yml/badge.svg)](https://github.com/coin-society/coin-society/actions/workflows/Test-Coverage.yml)

The project maintains high test coverage (98%+) across all components, utilities, and hooks. Tests are written using Jest and React Testing Library.

To run tests:
```bash
npm test
```

To run tests with coverage report:
```bash
npm test -- --coverage
```

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
