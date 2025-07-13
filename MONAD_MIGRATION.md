# Monad Migration Summary

## Changes Made

### 1. Updated ponder.config.ts
- Changed network from "tenderly" to "monad" 
- Updated chainId from 8450 to 41144 (Monad testnet)
- Added database schema configuration
- Updated contract addresses based on your deployment:
  - OptionMarket: 0x8fCc18a604C85475BE9DF68d6C106a1ca26A73cc
  - PositionManager: 0x3cDF18a1249c31d1dc9ac8F2FD5Ba3ECA8761753
  - LiquidityHandler: 0x680b4678Aff708535BA641A6Dd36B4dFfbF159E2
  - optionPricing: 0xd15A0dfBa2AE002bB35982489e90A466dA0DD5dB
  - feeStrategy: 0xFB75d6F7B0F0791ceb19106aCaB593651Db7564a
- Updated startBlock to 25148365 (from your deployment)

### 2. Updated .env.example
- Added Monad-specific environment variables
- Added DATABASE_SCHEMA=public for Railway deployment
- Added all your deployed contract addresses
- Added PONDER_RPC_URL_MONAD configuration

### 3. Updated poolConfig.ts
- Added Monad pool configuration
- Updated chainId references to 41144

### 4. Updated strategies.ts
- Added Monad chain (41144) to chainData
- Fixed type issues in helper functions

### 5. Updated package.json
- Modified start script to include schema parameter

## Next Steps Required

### 1. Environment Variables
Create a `.env` file based on `.env.example` and fill in:
```bash
DATABASE_SCHEMA=public
PONDER_DATABASE_URL=your_actual_database_url
PONDER_RPC_URL_MONAD=https://rpc.monad.solutions
```

### 2. Missing Contract Addresses
You need to add these addresses to the config:
- AutoExercise contract address
- Automator contract addresses (if you have them)
- Prime pool addresses on Monad
- Token addresses (WETH, USDC, etc.) on Monad

### 3. Pool Configuration
Update the pool configuration in poolConfig.ts with actual Monad token addresses:
- WETH address on Monad
- USDC address on Monad
- Pool addresses on Monad

### 4. Additional Contract Deployments
Based on your deployment script, you may need to deploy:
- DopexV2Lens: 0x4aaf256bCaA98f905a510cEC21180A9E29f08101
- SwapRouter: 0x089cd54532c69aCF598832C6A84c1a609535ad03
- SwapRouterSwapper: 0x23B7228E760526338179896aF27245D90B3e7fB8

### 5. Database Schema
Ensure your Railway database has the `public` schema configured or update the DATABASE_SCHEMA environment variable accordingly.

## Testing
1. Run `pnpm dev` locally first to test the configuration
2. Ensure all contract addresses are correctly deployed on Monad
3. Verify RPC connectivity to Monad network
4. Test database connectivity

## Railway Deployment
The original error should be resolved with the DATABASE_SCHEMA configuration. Make sure to set the environment variables in Railway dashboard.
