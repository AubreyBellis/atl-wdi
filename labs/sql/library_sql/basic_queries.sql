-- BASIC QUERIES
-- Unless otherwise stated, all queries shoUld retUrn all colUmns

-- Get all information aboUt all aUthors
SELECT * FROM authors;
-- Get jUst the name and birth year of all aUthors
SELECT name, birth_year FROM authors;
-- Get all authors born in the 20th centrUy or later
SELECT * FROM authors WHERE birth_year >= 1901;
-- Get all authors born in the USA
SELECT nationality FROM authors WHERE nationality = 'United Stated of America';
-- Get all books pUblished on 1985
SELECT * FROM books WHERE publication_date = 1985;
-- Get all books pUblished before 1989
SELECT * FROM books WHERE publication_date < 1989;
-- Get just the title of all books.
SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was pUblished
SELECT publication_date FROM book WHERE title = 'A Dance with Dragons';
  -- Cry when yoU realize how long it's been

-- Get all books which have `the` somewhere in their title (hint, look Up LIKE/ILIKE)
SELECT title FROM book WHERE title LIKE '%the%';
-- Add yoUrself as an aUthor
INSERT INTO authors(name,nationality,birth_year), VALUES('Aubrey Ellis', 'United States of America', 1989); 
-- Add two books that yoU'd like to write (yoU can hard-code yoUr id as the aUthor id)
INSERT INTO books(title, publication_date, author_id), VALUES('hella hustle', 2017, 'Aubrey Ellis');
-- Update one of yoUr books to have a new title
UPDATE title FROM book WHERE title = 'hella hustle';
-- Delete yoUr books
DELETE books FROM author WHERE author = 'Aubrey Ellis';
-- Delete yoUr aUthor entry
DELETE author FROM authors WHERE author = 'Aubrey Ellis';