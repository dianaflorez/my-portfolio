#!/bin/sh

mongoimport --jsonArray --db my_portfolio_db --collection users --file mockUsername.json --uri ${1}
mongoimport --jsonArray --db my_portfolio_db --collection profile --file mockProfile.json --uri ${1}
mongoimport --jsonArray --db my_portfolio_db --collection projects --file mockProjects.json --uri ${1}