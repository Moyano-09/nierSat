-- This file is intentionally a sketch, not a production schema.
-- It exists to teach the role of a database in this project.

-- TABLE: content_sources
-- Purpose:
-- Keep a catalog of providers your system knows about.
CREATE TABLE content_sources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  base_url TEXT,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: media_items
-- Purpose:
-- Store normalized image or video records coming from NASA, ESA, or other APIs.
CREATE TABLE media_items (
  id SERIAL PRIMARY KEY,
  source_id INTEGER REFERENCES content_sources(id),
  external_id VARCHAR(255),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  media_type VARCHAR(50),
  media_url TEXT,
  captured_at TIMESTAMP,
  fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: missions
-- Purpose:
-- Save mission summaries in a provider-neutral shape.
CREATE TABLE missions (
  id SERIAL PRIMARY KEY,
  source_id INTEGER REFERENCES content_sources(id),
  external_id VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  status VARCHAR(100),
  summary TEXT,
  launch_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: cache_logs
-- Purpose:
-- Track when external data was fetched.
-- This becomes useful once you want to avoid repeated API requests.
CREATE TABLE cache_logs (
  id SERIAL PRIMARY KEY,
  source_id INTEGER REFERENCES content_sources(id),
  resource_name VARCHAR(255) NOT NULL,
  fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  response_status INTEGER
);
