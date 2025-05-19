run:
	npm run dev

start-dependency:
	docker-compose up -d

db-generate-sql:
	npx drizzle-kit generate

db-migrate:
	npx drizzle-kit migrate