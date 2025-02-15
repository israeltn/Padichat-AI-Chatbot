# Development
FROM python:3.9-slim-bullseye AS development


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app

COPY . /app/

RUN apt-get update 

COPY ./requirements.txt .

# Install system dependencies
RUN pip install -r requirements.txt

# WORKDIR /app
# # Set environment variables to optimize Python
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# # Install dependencies
# RUN pip install --upgrade pip
# COPY requirements.txt /app/
# RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


# Production
FROM python:3.10 AS production
RUN useradd -m -r appuser && \
    mkdir /app && \
    chown -R appuser /app

# Copy the Python dependencies from the builder stage
COPY --from=builder /usr/local/lib/python3.13/site-packages/ /usr/local/lib/python3.13/site-packages/
COPY --from=builder /usr/local/bin/ /usr/local/bin/

 # set work directory
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn
COPY . .



# Set environment variables to optimize Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1 

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 8000

# Make entrypoint script executable
RUN chmod +x /app/entrypoint.sh

RUN python manage.py collectstatic --noinput

# Use entrypoint script
ENTRYPOINT ["./entrypoint.sh"]