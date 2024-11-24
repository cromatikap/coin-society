import { BitcoinAddress, BitcoinTxid } from "@/types";

export type Member = {
  name: string;
  occupation: string;
  address: BitcoinAddress;
  txRegistration: BitcoinTxid;
  certification: boolean;
  socials?: {
    github?: string;
    x?: string;
  }
}

export const members: Member[] = [
  {
    name: 'Casandra Archer',
    occupation: 'Alumni',
    address: 'bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9',
    txRegistration: '98e07795a8ca6452088ba64c2de4802c2c16ee733b6718da5a8a436ed31c84ac',
    certification: true,
  },
  {
    name: 'Agustin Cordova',
    occupation: 'Researcher',
    address: 'bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh',
    txRegistration: '94c5bf1f0373c0cc4924c454719ca0a89728697d160cca05fa79fc12e9442515',
    certification: true,
  },
  {
    name: 'cromatikap',
    occupation: 'Fullstack developer',
    address: 'bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx',
    txRegistration: '317f89c35c330e70c4d50a664c07d46f29dd41aea2dfd5c4a5366696448d1e2e',
    certification: true,
    socials: {
      github: 'https://github.com/cromatikap',
      x: 'https://twitter.com/cromatikap'
    }
  },
  {
    name: 'Lorie Spears',
    occupation: 'Marketing',
    address: 'bc1q3fk8jssft0928tzjktuefkp7k9r98g0q0ljd0m',
    txRegistration: '06c74924a411095ec6072f17005209daf05cf66eb87bce0d8c0c8201fac1b6cf',
    certification: false,
  },
  {
    name: 'Lamar Dean',
    occupation: 'Barista',
    address: 'bc1qd528shvfhls4k79z8ed385l7jz58ur90ufl9a7',
    txRegistration: 'af855f8dcaad737e05365733b89995c7ffd6ab75f46021ff2b4f5b318297153f',
    certification: false,
  }
]