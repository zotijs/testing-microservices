# Common

A library with all the shared code between the packages

## Modules

### Fastify Health Plugin

`src/fastify-health-plugin` decorates fastify instance with a health route.

Usage:

```
import fastify from 'fastify'
import { healthPlugin } from 'commons'

const app = fastify()

app.register(healthPlugin)
```
