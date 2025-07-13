# CLAMM Ponder v2

A Ponder application for indexing CLAMM (Concentrated Liquidity Automated Market Maker) data on the Monad testnet.

## Features

- Indexes option markets, liquidity handlers, and related contracts
- Provides GraphQL API for querying indexed data
- REST API endpoints for specific use cases
- Real-time blockchain data indexing

## Local Development

### Prerequisites

- Node.js 18.14 or higher
- npm (for deployment) or pnpm (for development)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd clamm-ponder-v2
```

2. Install dependencies:
```bash
# For development (recommended)
pnpm install

# For deployment
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables:
```env
PONDER_RPC_URL_MONAD=https://testnet-rpc.monad.xyz
```

5. Start development server:
```bash
pnpm dev
```

The application will be available at:
- GraphQL Playground: http://localhost:42069
- Health Check: http://localhost:42069/health

## Railway Deployment

### Prerequisites

- Railway account
- Railway CLI (optional)

### Deployment Steps

1. **Connect to Railway:**
   ```bash
   # If using Railway CLI
   railway login
   railway init
   ```

2. **Set Environment Variables:**
   In Railway dashboard, add the following environment variables:
   ```
   PONDER_RPC_URL_MONAD=https://testnet-rpc.monad.xyz
   ```

3. **Deploy:**
   ```bash
   # If using Railway CLI
   railway up
   ```
   
   Or connect your GitHub repository to Railway for automatic deployments.

### Railway Configuration

The application includes:
- `railway.toml` - Railway deployment configuration
- `nixpacks.toml` - Build configuration
- `Dockerfile` - Alternative deployment method
- Health check endpoint at `/health`

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PONDER_RPC_URL_MONAD` | Monad testnet RPC URL | Yes |

## API Endpoints

### GraphQL
- **Playground**: `/` or `/graphql`
- **Health Check**: `/health`

### REST API
- **Hello**: `GET /hello`
- **Expiring Options**: `GET /expiring-options/:minutes?`
- **Expired Options**: `GET /expired-options`

## Architecture

- **Ponder**: Blockchain indexing framework
- **Hono**: Web framework for API endpoints
- **Drizzle**: Database ORM
- **Viem**: Ethereum client library

## Monitoring

The application provides health checks and can be monitored through:
- Railway dashboard
- `/health` endpoint
- Application logs

## Troubleshooting

### Common Issues

1. **Database initialization errors**: Clear `.ponder` directory and restart
2. **RPC connection issues**: Verify RPC URL and network connectivity
3. **Block not found errors**: Ensure startBlock is set to a valid block number

### Logs

Check Railway logs for detailed error information:
```bash
railway logs
```

## License

Private - All rights reserved
