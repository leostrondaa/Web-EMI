curl http://localhost:3333/courses

curl http://localhost:3333/courses/1

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "Técnico em Informática", "duration": 4}' \
  http://localhost:3333/courses

curl -X PUT http://localhost:3333/courses/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Tecnólogo em Análise", "durations": 3}'

curl -X DELETE http://localhost:3333/courses/1
