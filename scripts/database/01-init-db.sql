CREATE DATABASE blog;
\c blog;

CREATE TABLE public."Posts" (
   id SERIAL PRIMARY KEY,
   title VARCHAR(50) NOT NULL
);