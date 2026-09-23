#!/usr/bin/env bash
# Rebuilds the product sites into public/<name>/, served at /<name> on the main
# domain (see the rewrites in next.config.mjs). Sources live in their own repos
# next to this one.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"

build() {
  local name="$1" src="$2"
  echo "→ $name ($src)"
  (cd "$src" && npm install --silent && npx vite build --base "/$name/" --outDir "$root/public/$name" --emptyOutDir)
}

build argus  "${ARGUS_SRC:-$root/../Glaux}"
build kratos "${KRATOS_SRC:-$root/../kratos}"
