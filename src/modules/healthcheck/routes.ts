import { healthCheckSchema } from './schemas'
import { healthCheckHandler } from './controllers'

import type { FastifyInstance, FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

const healthCheckRoute: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
	fastify.withTypeProvider<ZodTypeProvider>().route({
		method: 'GET',
		url: '/',
		schema: healthCheckSchema,
		handler: healthCheckHandler,
	})
}

export { healthCheckRoute }
