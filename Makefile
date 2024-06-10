.PHONY: run
SHELL := /bin/bash


.DEFAULT_GOAL := help


#- —— Help ! ——————————————————————————————————————————————————
help: #- Outputs this help screen
	@grep -hE '(^[a-zA-Z0-9_-]+:.*?#-.*$$)|(^#-)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?#- "}{printf "\033[32m%-25s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m#-/[33m/'

#- —— 🧰 Commands 🧰 ——————————————————————————————————————————

run:
	@npx nodemon app.js
