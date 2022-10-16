import { server } from './src/app'
import { gracefulShutdown } from './src/utils/shutdown'

async function startServer() {
	try {
		await server.listen({ port: 5000, host: '0.0.0.0' })
	} catch (err) {
		server.log.error(err)
		await server.close()
	}
}

startServer()

process.on('uncaughtException', (err) => {
	server.log.error(err)
	process.exit(1)
})

process.on('unhandledRejection', (err) => {
	server.log.error(err)
	process.exit(1)
})

const signals: Readonly<string[]> = ['SIGINT', 'SIGTERM', 'SIGHUP']

for (const signal of signals) {
	process.on(signal, () => {
		gracefulShutdown(signal, server)
	})
}