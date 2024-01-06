# Common

A library with all the shared code between the packages

## Modules

### Fastify Prisma Plugin

`src/fastify-prisma-plugin` decorates fastify instance with a prisma client.
More info [here](https://www.prisma.io/fastify)

Usage:

```
import fastify from 'fastify'
import { prismaPlugin } from 'commons'

const app = fastify()

app.register(prismaPlugin)
```
