
  -- Add SQL in this file to create the database tables for your API
  CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
  );
  
