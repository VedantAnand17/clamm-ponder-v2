export interface PoolConfig {
    address: string;
    chainId: number;
    isToken1Volatile: boolean;
    token0: {
      address: string;
      decimals: number;
      symbol: string;
    };
    token1: {
      address: string;
      decimals: number;
      symbol: string;
    };
  }
  
  export const POOL_CONFIGS: Record<string, PoolConfig> = {
    // Monad configurations
    "MONAD_WETH_USDC": {
      address: "0x60a336798063396d8f0f398411bad02a762735c4", // Add your actual pool address
      chainId: 10143, // Monad testnet chain ID
      isToken1Volatile: false,
      token0: {
        address: "0xcf5a6076cfa32686c0df13abada2b40dec133f1d", // Update with Monad WETH address
        decimals: 18,
        symbol: "WBTC"
      },
      token1: {
        address: "0xf817257fed379853cde0fa4f97ab987181b1e5ea", // Update with Monad USDC address
        decimals: 6,
        symbol: "USDC"
      }
    },
    // Keep existing Arbitrum configs for reference
    "ARBITRUM_WETH_USDC": {
      address: "0xc6962004f452be9203591991d15f6b388e09e8d0",
      chainId: 42161, // Arbitrum One
      isToken1Volatile: false, // is WETH token1?
      token0: {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH on Arbitrum
        decimals: 18,
        symbol: "WETH"
      },
      token1: {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum
        decimals: 6,
        symbol: "USDC"
      }
    },
    "ARBITRUM_POOL_1": {
      address: "0xd9e2a1a61B6E61b275cEc326465d417e52C1b95c".toLowerCase(),
      chainId: 42161, // Arbitrum One
      isToken1Volatile: false, // is WETH token1?
      token0: {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH on Arbitrum
        decimals: 18,
        symbol: "WETH"
      },
      token1: {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum
        decimals: 6,
        symbol: "USDC"
      }
    },
    "ARBITRUM_POOL_2": {
      address: "0xf3Eb87C1F6020982173C908E7eB31aA66c1f0296".toLowerCase(),
      chainId: 42161, // Arbitrum One
      isToken1Volatile: false, // is WETH token1?
      token0: {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH on Arbitrum
        decimals: 18,
        symbol: "WETH"
      },
      token1: {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum
        decimals: 6,
        symbol: "USDC"
      }
    },
    "ARBITRUM_POOL_3": {
      address: "0x0E4831319A50228B9e450861297aB92dee15B44F".toLowerCase(),
      chainId: 42161, // Arbitrum One
      isToken1Volatile: false, // is WETH token1?
      token0: {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH on Arbitrum
        decimals: 18,
        symbol: "WETH"
      },
      token1: {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum
        decimals: 6,
        symbol: "USDC"
      }
    },
    "ARBITRUM_POOL_4": {
      address: "0x843aC8dc6D34AEB07a56812b8b36429eE46BDd07".toLowerCase(),
      chainId: 42161, // Arbitrum One
      isToken1Volatile: false, // is WETH token1?
      token0: {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH on Arbitrum
        decimals: 18,
        symbol: "WETH"
      },
      token1: {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum
        decimals: 6,
        symbol: "USDC"
      }
    },
    "ARBITRUM_POOL_5": {
      address: "0xd0b53D9277642d899DF5C87A3966A349A798F224".toLowerCase(),
      chainId: 42161, // Arbitrum One
      isToken1Volatile: false, // is WETH token1?
      token0: {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH on Arbitrum
        decimals: 18,
        symbol: "WETH"
      },
      token1: {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum
        decimals: 6,
        symbol: "USDC"
      }
    }
    // Add other pools...
  };