FROM rust:1.92-slim-bookworm as builder

WORKDIR /app

RUN apt-get update && apt-get install -y pkg-config libssl-dev && rm -rf /var/lib/apt/lists/*

# Copy manifest only to cache dependencies
COPY Cargo.toml ./
# Create dummy main to build deps
RUN mkdir src && echo "fn main() {}" > src/main.rs
RUN cargo build --release

# Copy actual source
COPY src src
# Touch main.rs to force rebuild
RUN touch src/main.rs
RUN cargo build --release

# Runtime image
FROM debian:bookworm-slim
WORKDIR /app
RUN apt-get update && apt-get install -y ca-certificates openssl && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/rust-mm /usr/local/bin/rust-mm

# Disable stdout buffering for logs to appear immediately
ENV RUST_BACKTRACE=1
ENV RUST_LOG=info

# Default Command
CMD ["rust-mm"]
