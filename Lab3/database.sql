create DATABASE online_shop_db;

create TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  userRole VARCHAR(50)
);

create TABLE cart(
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  UNIQUE(userId),
  FOREIGN KEY (userId) REFERENCES users (id)
);

create TABLE orders(
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  cardNum INTEGER,
  orderIdList VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES users (id)
);

create TABLE log(
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  logType VARCHAR(50),
  logMsg VARCHAR(128),
  FOREIGN KEY (userId) REFERENCES users (id)
);

create TABLE category(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

create TABLE brand(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

create TABLE rate(
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  deviceId INTEGER,
  UNIQUE(deviceId),
  rate INTEGER,
  FOREIGN KEY (userId) REFERENCES users (id),
  FOREIGN KEY (deviceId) REFERENCES device (id)
);

create TABLE cartDevice(
  id SERIAL PRIMARY KEY,
  deviceId INTEGER,
  cartId INTEGER,
  UNIQUE(deviceId),
  FOREIGN KEY (deviceId) REFERENCES device (id),
  FOREIGN KEY (cartId) REFERENCES cart (id)
);

create TABLE device(
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  price INTEGER,
  rate INTEGER,
  image VARCHAR(255),
  deviceInfoId INTEGER,
  UNIQUE(deviceInfoId),
  categoryId INTEGER,
  UNIQUE(categoryId),
  brandId INTEGER,
  UNIQUE(brandId),
  FOREIGN KEY (deviceInfoId) REFERENCES deviceInfo (id),
  FOREIGN KEY (categoryId) REFERENCES category (id),
  FOREIGN KEY (brandId) REFERENCES brand (id)
);

create TABLE deviceInfo(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  description VARCHAR(2000)
);

-- ALTER TABLE users ADD FOREIGN KEY (id) REFERENCES cart (userId);

-- INSERT INTO cart VALUES (1, 1);

-- INSERT INTO orders VALUES (1, 1, 1, 'ddfsaf');

-- INSERT INTO users VALUES ('a', 'b', 'c', 'd', 'e');
 

-- INSERT INTO Users VALUES (1, 'Pavlo Golub');
 
-- INSERT INTO uProfiles VALUES (1, '{}');
