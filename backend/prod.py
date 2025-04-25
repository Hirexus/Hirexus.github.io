class ProductionConfig(Config):
    NLP_MODEL = "en_core_web_trf"
    REDIS_URL = "redis://cache:6379/0"
    CELERY_BROKER = "pyamqp://guest@rabbitmq//"
