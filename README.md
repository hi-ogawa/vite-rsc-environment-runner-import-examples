# Vite RSC and Environment Plugin Examples

This repository demonstrates how to use [`@vitejs/plugin-rsc`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc) with different environment plugins that implement the `__VITE_ENVIRONMENT_RUNNER_IMPORT__` convention, including [React Router framework mode](https://reactrouter.com/how-to/react-server-components) examples.

## Background

`@vitejs/plugin-rsc` defines the [`__VITE_ENVIRONMENT_RUNNER_IMPORT__`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc#__vite_environment_runner_import__) convention for runtime providers to enable cross-environment module loading required by RSC. See [PR #1037](https://github.com/vitejs/vite-plugin-react/pull/1037) for details.

## Runtime Provider Support

### Nitro

Nitro implements `__VITE_ENVIRONMENT_RUNNER_IMPORT__` in its dev worker, enabling RSC module loading across environments.

- [PR #3919: Experimental RSC plugin support](https://github.com/nitrojs/nitro/pull/3919)

### Cloudflare Workers

Cloudflare's Vite plugin uses the `childEnvironments` option to run multiple environments in a single Worker, enabling RSC support.

- [PR #11879: Child environments support](https://github.com/cloudflare/workers-sdk/pull/11879)

## Examples

| Example | Nitro | Cloudflare |
|---------|-------|------------|
| Starter | [`starter/nitro`](./starter/nitro) | [`starter/cloudflare`](./starter/cloudflare) |
| React Router | [`react-router/nitro`](./react-router/nitro) | [`react-router/cloudflare`](./react-router/cloudflare) |

These examples are slight modifications of:
- **Starter**: [`@vitejs/plugin-rsc` starter example](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc/examples/starter)
- **React Router**: [React Router RSC guide](https://reactrouter.com/how-to/react-server-components)

## Deployed Demos

- Starter (Cloudflare): https://vite-rsc-starter.hiro18181.workers.dev/
- React Router (Cloudflare): https://vite-rsc-react-router-framework-mode.hiro18181.workers.dev/
