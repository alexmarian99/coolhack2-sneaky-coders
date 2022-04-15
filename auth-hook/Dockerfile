FROM python:slim

EXPOSE 80

ENV PYTHONDONTWRITEBYTECODE=1


ENV PYTHONUNBUFFERED=1


COPY requirements.txt .
RUN python -m pip install -r requirements.txt

WORKDIR /app
COPY . /app

CMD ["gunicorn", "--bind", "0.0.0.0:80", "server:app"]