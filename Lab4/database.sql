create DATABASE online_shop_db;

create TABLE users(
  usersId SERIAL PRIMARY KEY,
  name VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  userRole VARCHAR(50)
);

create TABLE cart(
  cartId SERIAL PRIMARY KEY,
  usersId INTEGER,
  UNIQUE(usersId),
  FOREIGN KEY (usersId) REFERENCES users (usersId)
);

create TABLE orders(
  ordersId SERIAL PRIMARY KEY,
  usersId INTEGER,
  cardNum INTEGER,
  orderIdList VARCHAR(255),
  FOREIGN KEY (usersId) REFERENCES users (usersId)
);

create TABLE log(
  logId SERIAL PRIMARY KEY,
  usersId INTEGER,
  logType VARCHAR(50),
  logMsg VARCHAR(128),
  FOREIGN KEY (usersId) REFERENCES users (usersId)
);

create TABLE category(
  categoryId SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

create TABLE brand(
  brandId SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

create TABLE deviceInfo(
  deviceInfoId SERIAL PRIMARY KEY,
  title VARCHAR(50),
  description VARCHAR(2000)
);

create TABLE device(
  deviceId SERIAL PRIMARY KEY,
  name VARCHAR(128),
  price INTEGER,
  rate INTEGER,
  image VARCHAR(255),
  deviceInfoId INTEGER,
  UNIQUE(deviceInfoId),
  FOREIGN KEY (deviceInfoId) REFERENCES deviceInfo (deviceInfoId)
  -- FOREIGN KEY (categoryId) REFERENCES category (categoryId),
  -- FOREIGN KEY (brandId) REFERENCES brand (brandId)
);

create TABLE cartDevice(
  cartDeviceId SERIAL PRIMARY KEY,
  deviceId INTEGER,
  cartId INTEGER,
  UNIQUE(deviceId),
  FOREIGN KEY (deviceId) REFERENCES device (deviceId),
  FOREIGN KEY (cartId) REFERENCES cart (cartId)
);

create TABLE rate(
  rateId SERIAL PRIMARY KEY,
  usersId INTEGER,
  deviceId INTEGER,
  UNIQUE(deviceId),
  rate INTEGER,
  FOREIGN KEY (usersId) REFERENCES users (usersId),
  FOREIGN KEY (deviceId) REFERENCES device (deviceId)
);

create TABLE device_category_brand (
  brandId int REFERENCES brand(brandId),
  deviceId int REFERENCES device(deviceId),
  categoryId int REFERENCES category(categoryId),

  CONSTRAINT device_brand_pkey PRIMARY KEY (deviceId, categoryId, brandId)
);

CREATE TRIGGER log_user_creation AFTER INSERT ON users
  FOR EACH ROW EXECUTE PROCEDURE log_user_creation_func();

CREATE OR REPLACE FUNCTION log_user_creation_func()
RETURNS TRIGGER
AS $$
BEGIN
  INSERT INTO log(userId, logType, logMsg) VALUES (NEW.id, "Create", "User created"); 

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ALTER TABLE users ADD FOREIGN KEY (id) REFERENCES cart (userId);

-- INSERT INTO cart VALUES (1, 1);

-- INSERT INTO orders VALUES (1, 1, 1, 'ddfsaf');

-- INSERT INTO users VALUES ('a', 'b', 'c', 'd', 'e');
 

-- INSERT INTO Users VALUES (1, 'Pavlo Golub');
 
-- INSERT INTO uProfiles VALUES (1, '{}');
