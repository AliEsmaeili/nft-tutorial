import { Config } from './parser';

export const defaultConfig: Config = {
  activeNetwork: 'sandbox',
  availableNetworks: {
    sandbox: {
      providerUrl: 'http://localhost:20000',
      aliases: {
        bob: {
          address: 'tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU',
          secret: 'edsk3RFgDiCt7tWB2oe96w1eRw72iYiiqZPLu9nnEY23MYRp2d8Kkx',
        },
        alice: {
          address: 'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb',
          secret: 'edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq'
        }
      }
    },
    testnet: {
      providerUrl: 'https://hangzhounet.smartpy.io',
      aliases: {
        bob: {
          address: 'tz1TKc3zQBMv7Rez77sX4JNdqMvG33LQrURk',
          secret:
            'edskS2b1NYNdRhmge37u9gYqw7vDqBmm7Sd5LDU4dTx6Xd4XF5XSQ7P1DFggR8qVoVJwRHXtgeYa2HDQviABoCqJaEySVdHFJQ'
        },
        alice: {
          address: 'tz1Wbj2pUCCt7w18BMvcuq6DtUjTAVDniZuW',
          secret:
            'edskRgnCAbzDb1nagnzH17VH2WoNnBpGHz93jbsTZihT6YSqKDH5NRRbokFvm2rPTtSdwUzY9EU6W2eF6VbDti8oRRbBjPGEKL'
        }
      }
    },
    mainnet: {
      providerUrl: 'https://mainnet.smartpy.io',
      aliases: {}
    }
  }
};
