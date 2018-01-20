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

create table Following
(
id serial primary key,
username varchar references users2 (username),
follow_id int references users2 (id)
)

followers library
SELECT *
from following 
join users2 on following.follow_id = users2.id
 JOIN library ON users2.username = library.username
    where following.follow_id = 8

suggested followers
select first_name, last_name, image, users2.username
from users2 join following on users2.id = following.follow_id

get followers
select first_name, last_name, image, users2.username
from users2 join following on users2.id = following.follow_id
where username = $1

