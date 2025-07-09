import { createConfig, mergeAbis, factory } from "ponder";
import { http, parseAbiItem } from "viem";
import { Automatorv21ABI } from "./abis/Automatorv21ABI";
import { Automatorv11ABI } from "./abis/Automatorv11ABI";
import { UniswapV3PoolABI } from "./abis/UniswapV3PoolABI";
import { erc20ABI } from "./abis/erc20ABI";
import { OptionMarketABI } from "./abis/OptionMarketABI";
import { PositionManagerABI } from "./abis/PositionManagerABI";
import { LiquidityHandlerABI } from "./abis/LiquidityHandlerABI";
import { OptionPricingV2ABI } from "./abis/OptionPricingV2ABI";
import { FeeStrategyV2ABI } from "./abis/FeeStrategyV2ABI";
import { AutoExerciseABI } from "./abis/AutoExerciseABI";

export default createConfig({
  ordering: "multichain",
  networks: {
    monad: {
      chainId: 41144, // Monad testnet chain ID
      transport: http(process.env.PONDER_RPC_URL_MONAD),
      maxRequestsPerSecond: 300,
    },
  },
  // blocks: {
  //   // Automator01APY: {
  //   //   network: "arbitrum",
  //   //   startBlock: 26497566,
  //   //   interval: 10000,
  //   // },
  //   // PoolTVLandOpenInterest: {
  //   //   network: "tenderly",
  //   //   startBlock: 26497566,
  //   //   interval: 100,
  //   // },
  //   AutomatorAssets: {
  //     network: "arbitrum",
  //     startBlock: 310066571,
  //     interval: 10000,
  //   },
  //   tvlInfo: {
  //     network: "tenderly",
  //     startBlock: 26498072,
  //     interval: 1,
  //   },
  // },
  contracts: {
    Automatorv21: {
      network: {
        monad: {
          address: [
            // Add your deployed Automator addresses here when available
            // For now, using placeholder addresses
          ],
          startBlock: 25148365, // Using the block number from your deployment
        },
      },
      abi: mergeAbis([Automatorv21ABI, Automatorv11ABI]),
    },
    OptionMarket: {
      network: {
        monad: {
          address: ["0x8fCc18a604C85475BE9DF68d6C106a1ca26A73cc"], // DopexV2OptionMarketV2
          startBlock: 25149938,
        },
      },
      abi: OptionMarketABI,
    },
    PositionManager: {
      network: {
        monad: {
          address: ["0x3cDF18a1249c31d1dc9ac8F2FD5Ba3ECA8761753"], // DopexV2PositionManager
          startBlock: 25151334,
        },
      },
      abi: PositionManagerABI,
    },
    LiquidityHandler: {
      network: {
        monad: {
          address: ["0x680b4678Aff708535BA641A6Dd36B4dFfbF159E2"], // UniswapV3SingleTickLiquidityHandlerV2
          startBlock: 
25151405,
        },
      },
      abi: LiquidityHandlerABI,
    },
    primePool: {
      abi: UniswapV3PoolABI,
      network: {
        monad: {
          address: [
"0x60a336798063396d8f0f398411bad02a762735c4"
          ],
          startBlock: 23105858,
        },
      },
    },
    optionPricing: {
      abi: OptionPricingV2ABI,
      network: {
        monad: {
          address: ["0xd15A0dfBa2AE002bB35982489e90A466dA0DD5dB"], // OptionPricingV2
          startBlock: 25148365,
        },
      },
    },
    feeStrategy: {
      abi: FeeStrategyV2ABI,
      network: {
        monad: {
          address: ["0xFB75d6F7B0F0791ceb19106aCaB593651Db7564a"], // DopexV2ClammFeeStrategyV2
          startBlock: 25150193,
        },
      },
    },
    AutoExercise: {
      abi: AutoExerciseABI,
      network: {
        monad: {
          address: [
            // Add AutoExercise address here when available
          ],
          startBlock: 25148365,
        },
      },
    },
    ERC20: {
      network: "monad",
      abi: erc20ABI,
    },
  },
});
