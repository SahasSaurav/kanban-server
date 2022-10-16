import { app as server } from './src/app'
import { gracefulShutdown } from './src/utils/shutdown'

async function startServer(): Promise<void> {
	try {
		await server.listen({ port: 5000, host: '0.0.0.0' })
	} catch (err) {
		server.log.error(err)
		await server.close()
	}
}

void startServer()

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
		void gracefulShutdown(signal, server)
	})
}
