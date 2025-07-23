# jsonplaceholder-api-tests

newman run collections\Testing_Collection.postman_collection.json -e environments\prod_env.postman_environment.json --reporters cli,htmlextra --reporter-htmlextra-export reports\report.html
