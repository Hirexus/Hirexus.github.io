# =========== Backend Build ===========
FROM python:3.11-slim as builder

WORKDIR /build
COPY backend/requirements.txt .

RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc python3-dev && \
    python -m venv /opt/venv && \
    /opt/venv/bin/pip install --no-cache-dir -r requirements.txt

# =========== Production Image ===========
FROM python:3.11-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends libmagic1 && \
    useradd --create-home appuser

WORKDIR /app
USER appuser

COPY --from=builder /opt/venv /opt/venv
COPY --chown=appuser:appuser backend/ .

ENV PATH="/opt/venv/bin:$PATH"
ENV PYTHONPATH=/app

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "-k", "uvicorn.workers.UvicornWorker", "app.main:app"]
