import { cloudflare } from '@cloudflare/vite-plugin'
import react from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    rsc({
      // Cloudflare handles server routing, so we disable the built-in server handler
      serverHandler: false,
    }),
    cloudflare({
      viteEnvironment: {
        // `rsc` environment handler entry is defined as "main" in wrangler.jsonc
        name: 'rsc',
        // Define `ssr` as a child environment so that it runs in the same Worker as the parent `rsc` environment
        childEnvironments: ['ssr'],
      },
    }),
  ],
  environments: {
    ssr: {
      build: {
        // build `ssr` inside `rsc` directory so that
        // wrangler can deploy self-contained `dist/rsc`
        outDir: './dist/rsc/ssr',
        rollupOptions: {
          input: {
            index: './src/framework/entry.ssr.tsx',
          },
        },
      },
      optimizeDeps: {
        entries: ['./src/framework/entry.ssr.tsx'],
      },
    },
    client: {
      build: {
        rollupOptions: {
          input: {
            index: './src/framework/entry.browser.tsx',
          },
        },
      },
    },
  },
})
