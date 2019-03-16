--psql -d test -U postgres -f ./seeds/seed-names.sql

INSERT INTO PEOPLE (Person) VALUES
  ('Chris'),
  ('Shaq'),
  ('Abbey'),
  ('Natalie'), 
  ('Bruno'),
  ('Melissa'),
  ('Alexia'); 