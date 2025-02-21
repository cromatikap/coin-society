import type { BitcoinAddress, BitcoinTxid, EthereumAddress, EthereumName, Url } from "@/types";

export type MemberAddress = BitcoinAddress;
export type Member = {
  occupation: string;
  address: MemberAddress;
  txRegistration?: BitcoinTxid;
  certification?: boolean;
  identity?: {
    instagram?: Url;
    linkedin?: Url;
    x?: Url;
    github?: Url;
    eth?: {
      ens?: EthereumName;
      address: EthereumAddress;
    };
  }
}

export const members: Member[] = [
  {
    occupation: 'Pioneer alumni',
    address: 'bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9',
    txRegistration: '98e07795a8ca6452088ba64c2de4802c2c16ee733b6718da5a8a436ed31c84ac',
    certification: true,
  },
  {
    occupation: 'Researcher',
    address: 'bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh',
    txRegistration: '94c5bf1f0373c0cc4924c454719ca0a89728697d160cca05fa79fc12e9442515',
    certification: true,
  },
  {
    occupation: 'Marketing',
    address: 'bc1q3fk8jssft0928tzjktuefkp7k9r98g0q0ljd0m',
    txRegistration: '06c74924a411095ec6072f17005209daf05cf66eb87bce0d8c0c8201fac1b6cf',
    certification: false,
  },
  {
    occupation: 'Faith Advisor',
    address: 'bc1qd528shvfhls4k79z8ed385l7jz58ur90ufl9a7',
    txRegistration: 'af855f8dcaad737e05365733b89995c7ffd6ab75f46021ff2b4f5b318297153f',
    certification: false,
  },
  {
    occupation: 'Minimarket Owner',
    address: "bc1qq7mvrn4yrnsvy2kjz649dvwlna22tex68hd9cn",
    txRegistration: "aa68a1d0bdcd6203835421c321e92617b2f0d26f70d02edbef2dd625c14342a0",
    certification: false,
  },
  {
    occupation: 'Entrepreneur',
    address: "bc1q535k6enl43u979veg0cgz0dz3w23tultstkcwq",
  },
  {
    occupation: 'Passionate Cuber',
    address: "bc1qrcc7e63wnp7eh5pkz5n9eqy0nmpdtw04qz46pc",
  },
  {
    occupation: '',
    address: "bc1qeuupa0c8e87yxejud4pfy6em2zs7eff5ctjtqf",
  },
  {
    occupation: '',
    address: "bc1qqnpeafac363s0qdu806t5u2pyjafdrgfvq3xp0",
  },
  {
    occupation: 'Fullstack developer',
    address: 'bc1qym3lewe8sc76q4j2f9cuzjt56df3k7z7a6fjtm',
  },
];
