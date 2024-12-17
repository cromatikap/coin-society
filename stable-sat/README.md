# [coin-society.eth](https://coin-society.org) - Stable Sat

[Home](/) | [Website](/website/) | [Certification](/certification/) | [**Stable Sat**](/stable-sat/) | [Contributing](/CONTRIBUTING.md)

```mermaid
---
title: Stable sat overview proposal
---
flowchart TD
    client("client (web GUI)") --"queries public API"--> deamon
    client --"connect"--> Account
    deamon --"process 1"--> deposit
    deamon --"process 2"--> withdraw
    deposit --"listen to"--> BTCtreasury(treasury BTC address)
    deposit --"contract call: mint() for"--> ETHuser(user ETH address)
    withdraw --"transfer to"--> BTCuser(user BTC address)
    withdraw --"listen to"--> ETHcontract(contract burn event from user ETH address)
    Account(EVM account) --"contract call: burn() by"--> treasuryContract(user ETH address)
```
