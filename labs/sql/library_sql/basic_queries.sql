-- BASIC QUERIES
<<<<<<< HEAD
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
=======
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors

-- Get just the name and birth year of all authors

-- Get all authors born in the 20th century or later

-- Get all authors born in the USA

-- Get all books published in 1985

-- Get all books published before 1989

-- Get just the title of all books.

-- Get just the year that 'A Dance with Dragons' was published

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)

-- Add yourself as an author

-- Add two books that you'd like to write (you can hard-code your id as the author id)

-- Update one of your books to have a new title

-- Delete your books

-- Delete your author entry
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37
