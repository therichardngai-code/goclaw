# ── Build stage ──────────────────────────────────────────────
FROM golang:1.24-bookworm AS builder
WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o goclaw .

# ── Runtime stage ────────────────────────────────────────────
FROM debian:bookworm-slim

# Base tools
RUN apt-get update && apt-get install -y \
    ca-certificates curl git wget \
    && rm -rf /var/lib/apt/lists/*

# Python 3 + pip (for skills that use Python scripts)
RUN apt-get update && apt-get install -y \
    python3 python3-pip python3-venv \
    && rm -rf /var/lib/apt/lists/* \
    && ln -sf /usr/bin/python3 /usr/bin/python

# Node.js 22 LTS (for skills that use Node scripts: pptxgenjs, docx, etc.)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Common skill dependencies (pre-installed to avoid install on every agent run)
# Python: pypdf, google-genai, requests, beautifulsoup4
RUN pip3 install --break-system-packages --no-cache-dir \
    pypdf google-genai requests beautifulsoup4 pillow

# Node: pptxgenjs (PPTX generation), docx (Word docs)
RUN npm install -g pptxgenjs docx

# Media tools (used by skills + browser automation)
RUN apt-get update && apt-get install -y \
    ffmpeg imagemagick pandoc \
    && rm -rf /var/lib/apt/lists/*

# Docker CLI (for Docker-out-of-Docker sandbox management)
RUN curl -fsSL https://get.docker.com | sh \
    && rm -rf /var/lib/apt/lists/*

# GoClaw binary + migrations
COPY --from=builder /build/goclaw /usr/local/bin/goclaw
COPY --from=builder /build/migrations /app/migrations

WORKDIR /app
EXPOSE 18790
ENTRYPOINT ["goclaw"]
