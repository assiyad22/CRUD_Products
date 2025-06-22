CREATE TABLE IF NOT EXISTS products (
    
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DOUBLE PRECISION CHECK (price > 0)
    
);






