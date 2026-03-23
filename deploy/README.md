# GoClaw Docker Deployment

## Quick Start

```bash
cd deploy

# 1. Set password
export DB_PASSWORD=your_secure_password

# 2. Edit config
cp config.json config.json.bak
# Edit config.json — set gateway.token

# 3. Build + Start
docker compose build
docker compose up -d

# 4. Run migrations
docker compose exec goclaw goclaw migrate up

# 5. Onboard (first time — creates default agent + provider)
docker compose exec -it goclaw goclaw onboard

# 6. Verify
curl http://localhost:18790/v1/agents
```

## Architecture

```
postgres:5432  ← GoClaw DB (pgvector)
goclaw:18790   ← WS + HTTP API (Python, Node, Docker CLI included)
```

## What's Included in the Image

| Component | Purpose |
|-----------|---------|
| Python 3 + pip | Skills with .py scripts |
| Node.js 22 LTS | Skills with .js scripts (pptxgenjs, docx) |
| ffmpeg | Audio/video processing |
| imagemagick | Image manipulation |
| pandoc | Document conversion |
| Docker CLI | Sandbox container management (DooD) |
| pypdf, google-genai, requests, beautifulsoup4, pillow | Pre-installed Python packages |
| pptxgenjs, docx | Pre-installed Node packages |

## Config

Edit `config.json` before starting:

| Field | Description |
|-------|-------------|
| `gateway.token` | Admin auth token (**CHANGE THIS**) |
| `sandbox.enabled` | `true` to enable Docker sandboxes for agent code execution |
| `sandbox.image` | Docker image for sandbox containers |
| `sandbox.expose_browser_ports` | `true` for live browser/terminal viewport (requires sandbox image with noVNC + ttyd) |
| `sandbox.memory_mb` | RAM limit per sandbox container |
| `sandbox.network_enabled` | `true` to allow sandbox internet access |

## ClawBoxes Integration

For use with ClawBoxes SaaS platform:

1. ClawBoxes creates tenants via WS: `tenants.create`
2. Creates tenant-bound API keys: `api_keys.create { owner_id, tenant_id }`
3. Pushes budget: `tenants.update { settings: { budget_monthly_cents } }`
4. Proxies all user requests via tenant-scoped API key

See `plans/clawboxes/goclaw-2.0-refactor/` for full integration docs.

## Common Operations

```bash
# Logs
docker compose logs -f goclaw

# Rebuild after code changes
docker compose build goclaw
docker compose up -d goclaw

# Shell into container
docker compose exec goclaw bash

# Check skill runtimes
curl http://localhost:18790/v1/skills/runtimes

# Stop
docker compose down        # keep data
docker compose down -v     # DELETE all data
```
