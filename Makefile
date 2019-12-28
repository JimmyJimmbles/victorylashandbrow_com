####################
# Run from web root:
# $ make
####################

dev: env-dev permissions-uploads import-dev install-vendors build-assets done

import-dev:
	@echo -n Importing database...
	@gunzip < db_dump.sql.gz | mysql -u root victorylashandbrow_com
	@printf " \033[1;32mDone\n\033[0m"

permissions-uploads:
	@if test -d $(UPLOADS_DIR); \
	then echo "Updating uploads directory permissions..."; \
	chmod -R 0777 $(UPLOADS_DIR); \
	printf " \033[1;32mDone\n\033[0m"; \
	fi;

install-vendors:
	@echo -n Installing node packages...
	@cd $(THEME_DIR); \
	source $(HOME)/.bashrc; \
	nvm install; \
	nvm use; \
	npm install;
	@printf " \033[1;32mDone\n\033[0m";

build-assets:
	@echo -n Building assets...
	@cd $(THEME_DIR); \
	source $(HOME)/.bashrc; \
	nvm install; \
	nvm use; \
	npm run build;
	@printf " \033[1;32mDone\n\033[0m"