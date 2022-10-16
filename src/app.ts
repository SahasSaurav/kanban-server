import fastify from 'fastify'

import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'

import { router } from './router/api'

import type { FastifyInstance } from 'fastify/types/instance'

function build(): FastifyInstance {
	const server = fastify({
		logger: true,
		bodyLimit: 5 * 1024 * 1024,
		requestTimeout: 120 * 1000,
	})

	server.setValidatorCompiler(validatorCompiler)
	server.setSerializerCompiler(serializerCompiler)

	void server.register(router, { prefix: 'api' })

	return server
}

export { build }
