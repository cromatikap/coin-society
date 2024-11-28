import { BitcoinAddress, BitcoinTxid, EthereumAddress, EthereumName, Url } from "@/types";

export type MemberAddress = BitcoinAddress | "candidate" | "eligible candidate";
export type Member = {
  occupation: string;
  address: MemberAddress;
  txRegistration: BitcoinTxid | null;
  certification: boolean;
  identity: {
    emoji: string;
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
    identity: {
      emoji: '🌷' 
    }
  },
  {
    occupation: 'Researcher',
    address: 'bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh',
    txRegistration: '94c5bf1f0373c0cc4924c454719ca0a89728697d160cca05fa79fc12e9442515',
    certification: true,
    identity: {
      emoji: '🔬',
    }
  },
  {
    occupation: 'Fullstack developer',
    address: 'bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx',
    txRegistration: '317f89c35c330e70c4d50a664c07d46f29dd41aea2dfd5c4a5366696448d1e2e',
    certification: true,
    identity: {
      emoji: '👨‍💻',
      eth: {
        ens: 'cromatikap.eth',
        address: '0xeEEe8f7922E99ce6CEd5Cb2DaEdA5FE80Df7C95e'
      },
      github: 'https://github.com/cromatikap',
      x: 'https://twitter.com/cromatikap',
    }
  },
  {
    occupation: 'Marketing',
    address: 'bc1q3fk8jssft0928tzjktuefkp7k9r98g0q0ljd0m',
    txRegistration: '06c74924a411095ec6072f17005209daf05cf66eb87bce0d8c0c8201fac1b6cf',
    certification: false,
    identity: {
      emoji: '🍜',
    }
  },
  {
    occupation: 'Barista',
    address: 'bc1qd528shvfhls4k79z8ed385l7jz58ur90ufl9a7',
    txRegistration: 'af855f8dcaad737e05365733b89995c7ffd6ab75f46021ff2b4f5b318297153f',
    certification: false,
    identity: {
      emoji: '🥁',
    }
  },
  {
    occupation: 'Entrepreneur',
    address: "bc1q535k6enl43u979veg0cgz0dz3w23tultstkcwq",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '💡',
    }
  },
  {
    occupation: 'PhD Researcher',
    address: "candidate",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '🤩',
    }
  },
  {
    occupation: 'Fullstack developer',
    address: "eligible candidate",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '🛸',
    }
  },
  {
    occupation: 'Faith Advisor',
    address: "candidate",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '👑',
    }
  },
  {
    occupation: 'Network engineer',
    address: "eligible candidate",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '📡',
    }
  },
  {
    occupation: 'Minimercado owner',
    address: "candidate",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '🪄',
    }
  },
  {
    occupation: 'Degen maxi',
    address: "candidate",
    txRegistration: null,
    certification: false,
    identity: {
      emoji: '🦄',
    }
  }
]