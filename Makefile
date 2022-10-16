run_dev: docker compose -f ./docker-compose.yml up --remove-orphans

build: docker compose build --force-rm