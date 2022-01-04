dev:
	@export $(xargs < .env)
	@node 8-environments/index.js
