import type { FastifyInstance } from 'fastify'

async function gracefulShutdown(signal: string, server: FastifyInstance): Promise<void> {
	server.log.info(`${signal} signal received and server is shutting down gracefully`)
	await server.close()
	process.exit(0)
}

export { gracefulShutdown }
