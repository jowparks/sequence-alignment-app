# sequence-alignment-app

Run with `docker-compose up`

API available at `localhost:8000`
- Test user registered with `username=test` and `password=test`

# Timing
- 1 hour to bootstrap docker/django/redis/postgres
- 1 hour django migrations/urls/drf setup with initial AlignmentModel and Viewset
- 1 hour researching Biopython for accessing gene data, this seems like something that could be included in description of problem.

# Caveats
- Write unit/integration tests given time
- Would typically use a better distributed/scalable task running system, ie SQS/Kafka and lambda/fargate. celery/db entries used for ease.
- Registration/Login flow would be created instead of making a default user. This is something that could be easily added in subsequent task.
- In docker-compose for local dev, mount in volume with code for development speed
- Same docker image used for celery/api, could be separated out
- Would install linter/GHA and mypy checks
- Validation and Caching on sequences submitted/ran
- Would save genomes as separate DB model in standard scenario (rather than text field)
- Create partial alignment matching/scores rather than binary 
- Could add pagination to API for performance
- Could have user registration flow

