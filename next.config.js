/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't generate AGENTS.md / CLAUDE.md on `next dev`
  agentRules: false
}

module.exports = nextConfig
