# Development
FROM python:3.11-slim AS development
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


# Production
FROM python:3.11-slim AS production
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn
COPY . .

# Make entrypoint script executable
RUN chmod +x /app/entrypoint.sh
# Expose port
EXPOSE 8000

RUN python manage.py collectstatic --noinput

# Use entrypoint script
ENTRYPOINT ["./entrypoint.sh"]