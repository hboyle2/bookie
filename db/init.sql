CREATE TABLE users2 (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password VARCHAR
);

create table Library (
id Varchar,
title text,
author text,
publisher varchar(20),
publishdate date,
description varchar(400),
image varchar(500),
userid int REFERENCES users2 (id)
)