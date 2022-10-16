import { healthCheckRoute } from '../modules/healthcheck/routes'

import type { FastifyPluginAsync, FastifyInstance } from 'fastify'

const router: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
	void fastify.register(healthCheckRoute, { prefix: '/healthcheck' })
}

export { router }
