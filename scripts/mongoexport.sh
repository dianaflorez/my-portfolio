cd ..
rm -r ./exports
mkdir ./exports
cd exports

mongoexport --db my_portfolio_db --collection users --out mockUsername.json
mongoexport --db my_portfolio_db --collection profile --out mockProfile.json
mongoexport --db my_portfolio_db --collection projects --out mockProjects.json