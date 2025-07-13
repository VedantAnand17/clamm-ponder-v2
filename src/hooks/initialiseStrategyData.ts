import { type Address, type PublicClient } from "viem";

export async function initialiseStrategyData(
  client: PublicClient,
  address: Address,
  contractAbi: any // Assuming contractAbi is the ABI of the contract
) {
  const results = await client.multicall({
    contracts: [
      {
        abi: contractAbi,
        address,
        functionName: 'pool',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'router',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'poolTickSpacing',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'balancer',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'asset',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'counterAsset',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'depositFeePips',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'manager',
        args: [],
      },
      {
        abi: contractAbi,
        address,
        functionName: 'handler',
        args: [],
      },
    ],
    allowFailure: true
  });

  const [
    pool_address,
    router_address,
    pool_tick_spacing,
    balancer_vault,
    asset_address,
    counter_address,
    depositFeePips,
    position_manager,
    liquidity_handler,
  ] = results.map(result => 
    result.status === 'success' ? result.result : null
  );

  return {
    pool: pool_address,
    router: router_address,
    pool_tick_spacing: pool_tick_spacing,
    balancer_vault: balancer_vault,
    asset: asset_address,
    counter: counter_address,
    deposit_fee_pips: depositFeePips,
    position_manager: position_manager,
    liquidity_handler: liquidity_handler,
  };
}