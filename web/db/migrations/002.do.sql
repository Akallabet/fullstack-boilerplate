
  -- Add SQL in this file to create the database tables for your API
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  );
  
