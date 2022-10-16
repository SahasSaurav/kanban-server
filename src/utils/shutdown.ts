import type { FastifyInstance } from 'fastify'

function gracefulShutdown(signal: string, server: FastifyInstance) {
	server.log.info(
		`${signal} signal received and server is shutting down gracefully`
	)
	server.close()
	process.exit(0)
}

export { gracefulShutdown }