CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Destination" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    country VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Post" (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255),
    published BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW(),
    authorId INTEGER NOT NULL,
    destinationId INTEGER,
    FOREIGN KEY (authorId) REFERENCES "User " (id) ON DELETE CASCADE,
    FOREIGN KEY (destinationId) REFERENCES "Destination" (id) ON DELETE SET NULL
);

CREATE TABLE "Comment" (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW(),
    postId INTEGER NOT NULL,
    authorId INTEGER NOT NULL,
    FOREIGN KEY (postId) REFERENCES "Post" (id) ON DELETE CASCADE,
    FOREIGN KEY (authorId) REFERENCES "User " (id) ON DELETE CASCADE
);

CREATE TABLE "Like" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMP DEFAULT NOW(),
    postId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    UNIQUE (postId, userId),
    FOREIGN KEY (postId) REFERENCES "Post" (id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES "User " (id) ON DELETE CASCADE
);



-- Poblar la tabla User
INSERT INTO "User  " (email, name, password, image) VALUES
('user1@example.com', 'Alice', 'password1', 'https://example.com/image1.jpg'),
('user2@example.com', 'Bob', 'password2', 'https://example.com/image2.jpg'),
('user3@example.com', 'Charlie', 'password3', 'https://example.com/image3.jpg'),
('user4@example.com', 'David', 'password4', 'https://example.com/image4.jpg'),
('user5@example.com', 'Eve', 'password5', 'https://example.com/image5.jpg'),
('user6@example.com', 'Frank', 'password6', 'https://example.com/image6.jpg'),
('user7@example.com', 'Grace', 'password7', 'https://example.com/image7.jpg'),
('user8@example.com', 'Hannah', 'password8', 'https://example.com/image8.jpg'),
('user9@example.com', 'Ivy', 'password9', 'https://example.com/image9.jpg'),
('user10@example.com', 'Jack', 'password10', 'https://example.com/image10.jpg'),
('user11@example.com', 'Kate', 'password11', 'https://example.com/image11.jpg'),
('user12@example.com', 'Leo', 'password12', 'https://example.com/image12.jpg'),
('user13@example.com', 'Mia', 'password13', 'https://example.com/image13.jpg'),
('user14@example.com', 'Nina', 'password14', 'https://example.com/image14.jpg'),
('user15@example.com', 'Oscar', 'password15', 'https://example.com/image15.jpg'),
('user16@example.com', 'Paul', 'password16', 'https://example.com/image16.jpg'),
('user17@example.com', 'Quinn', 'password17', 'https://example.com/image17.jpg'),
('user18@example.com', 'Rita', 'password18', 'https://example.com/image18.jpg'),
('user19@example.com', 'Sam', 'password19', 'https://example.com/image19.jpg'),
('user20@example.com', 'Tina', 'password20', 'https://example.com/image20.jpg');


-- Poblar la tabla Destination
INSERT INTO "Destination" (name, description, image, country) VALUES
('Eiffel Tower', 'Iconic symbol of Paris', 'https://example.com/eiffel.jpg', 'France'),
('Grand Canyon', 'A massive canyon in Arizona', 'https://example.com/grandcanyon.jpg', 'USA'),
('Great Wall', 'Ancient wall in China', 'https://example.com/greatwall.jpg', 'China'),
('Machu Picchu', 'Incan citadel in Peru', 'https://example.com/machupicchu.jpg', 'Peru'),
('Sydney Opera House', 'Famous performing arts center', 'https://example.com/sydney.jpg', 'Australia'),
('Santorini', 'Beautiful island in Greece', 'https://example.com/santorini.jpg', 'Greece'),
('Taj Mahal', 'Symbol of love in India', 'https://example.com/tajmahal.jpg', 'India'),
('Niagara Falls', 'Famous waterfalls on the border of USA and Canada', 'https://example.com/niagara.jpg', 'USA/Canada'),
('Mount Fuji', 'Iconic volcano in Japan', 'https://example.com/fuji.jpg', 'Japan'),
('Colosseum', 'Ancient amphitheater in Rome', 'https://example.com/colosseum.jpg', 'Italy'),
('Stonehenge', 'Prehistoric monument in England', 'https://example.com/stonehenge.jpg', 'England'),
('Angkor Wat', 'Largest religious monument in Cambodia', 'https://example.com/angkorwat.jpg', 'Cambodia'),
('Christ the Redeemer', 'Famous statue in Brazil', 'https://example.com/christ.jpg', 'Brazil'),
('Pyramids of Giza', 'Ancient pyramids in Egypt', 'https://example.com/pyramids.jpg', 'Egypt'),
('Himalayas', 'Mountain range in Asia', 'https://example.com/himalayas.jpg', 'Nepal'),
('Yellowstone National Park', 'First national park in the USA', 'https://example.com/yellowstone.jpg', 'USA'),
('Banff National Park', 'Stunning national park in Canada', 'https://example.com/banff.jpg', 'Canada'),
('Galapagos Islands', 'Unique wildlife in Ecuador', 'https://example.com/galapagos.jpg', 'Ecuador'),
('Acropolis', 'Ancient citadel in Athens', 'https://example.com/acropolis.jpg', 'Greece'),
('Victoria Falls', 'Largest waterfall in the world', 'https://example.com/victoriafalls.jpg', 'Zambia/Zimbabwe'),
('Sagrada Familia', 'Famous basilica in Barcelona', 'https://example.com/sagradafamilia.jpg', 'Spain');


-- Poblar la tabla Post
INSERT INTO "Post" (title, content, image, published, authorId, destinationId) VALUES
('Visiting the Eiffel Tower', 'A wonderful experience to see the Eiffel Tower up close.', 'https://example.com/eiffel_post.jpg', TRUE, 1, 64),
('Exploring the Grand Canyon', 'The Grand Canyon is breathtaking and a must-visit.', 'https://example.com/grandcanyon_post.jpg', TRUE, 2, 65),
('Hiking the Great Wall', 'Hiking along the Great Wall of China is an unforgettable adventure.', 'https://example.com/greatwall_post.jpg', TRUE, 3, 66),
('Discovering Machu Picchu', 'Machu Picchu is a marvel of ancient engineering.', 'https://example.com/machupicchu_post.jpg', TRUE, 4, 67),
('A Night at the Sydney Opera House', 'Enjoying a performance at the iconic Sydney Opera House.', 'https://example.com/sydney_post.jpg', TRUE, 5, 68),
('Relaxing in Santorini', 'Santorini offers stunning views and beautiful sunsets.', 'https://example.com/santorini_post.jpg', TRUE, 6, 69),
('The Beauty of the Taj Mahal', 'The Taj Mahal is a symbol of love and beauty.', 'https://example.com/tajmahal_post.jpg', TRUE, 7, 70),
('Adventuring at Niagara Falls', 'Niagara Falls is a natural wonder that captivates visitors.', 'https://example.com/niagara_post.jpg', TRUE, 8, 71),
('Climbing Mount Fuji', 'Mount Fuji is a challenging yet rewarding climb.', 'https://example.com/fuji_post.jpg', TRUE, 9, 72),
('History of the Colosseum', 'The Colosseum is a testament to ancient Roman architecture.', 'https://example.com/colosseum_post.jpg', TRUE, 10, 73),
('Mysteries of Stonehenge', 'Stonehenge is shrouded in mystery and history.', 'https://example.com/stonehenge_post.jpg', TRUE, 11,74),
('Exploring Angkor Wat', 'Angkor Wat is a magnificent temple complex.', 'https://example.com/angkorwat_post.jpg', TRUE, 12, 75),
('Visiting Christ the Redeemer', 'The view from Christ the Redeemer is breathtaking.', 'https://example.com/christ_post.jpg', TRUE, 13, 76),
('The Pyramids of Giza', 'The Pyramids are one of the Seven Wonders of the Ancient World.', 'https://example.com/pyramids_post.jpg', TRUE, 14, 77),
('Trekking in the Himalayas', 'The Himalayas offer stunning landscapes and adventure.', 'https://example.com/himalayas_post.jpg', TRUE, 15, 78),
('Wildlife in Yellowstone', 'Yellowstone is home to diverse wildlife and natural beauty.', 'https://example.com/yellowstone_post.jpg', TRUE, 16, 79),
('Scenic Views in Banff', 'Banff National Park is known for its stunning scenery.', 'https://example.com/banff_post.jpg', TRUE, 17, 80),
('Exploring the Galapagos Islands', 'The Galapagos Islands are famous for their unique wildlife.', 'https://example.com/galapagos_post.jpg', TRUE, 18, 81),
('The Acropolis of Athens', 'The Acropolis is a symbol of ancient Greek civilization.', 'https://example.com/acropolis_post.jpg', TRUE, 19, 82),
('The Majesty of Victoria Falls', 'Victoria Falls is one of the most spectacular waterfalls.', 'https://example.com/victoriafalls_post.jpg', TRUE, 20, 83);


-- Poblar la tabla Comment
INSERT INTO "Comment" (content, postId, authorId) VALUES
('Amazing post! I would love to visit.', 1, 2),
('The view is breathtaking!', 2, 3),
('I can’t wait to hike the Great Wall!', 3, 4),
('Machu Picchu is on my bucket list!', 4, 5),
('Sydney Opera House is a must-see!', 5, 6),
('Santorini looks beautiful!', 6, 7),
 ('The Taj Mahal is stunning!', 7, 8),
('Niagara Falls is so powerful!', 8, 9),
('Climbing Mount Fuji is a dream!', 9, 10),
('The Colosseum is fascinating!', 10, 11),
('Stonehenge is so mysterious!', 11, 12),
('Angkor Wat is breathtaking!', 12, 13),
('Christ the Redeemer is iconic!', 13, 14),
('The Pyramids are incredible!', 14, 15),
('Hiking in the Himalayas sounds amazing!', 15, 16),
('Yellowstone is a natural wonder!', 16, 17),
('Banff is so picturesque!', 17, 18),
('The Galapagos Islands are unique!', 18, 19),
('The Acropolis is a historical gem!', 19, 20),
('Victoria Falls is mesmerizing!', 20, 1);

-- Poblar la tabla Like
INSERT INTO "Like" (postId, userId) VALUES
(1, 2),
(1, 3),
(2, 1),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8),
(5, 9),
(5, 10),
(6, 11),
(6, 12),
(7, 13),
(7, 14),
(8, 15),
(8, 16),
(9, 17),
(9, 18),
(10, 19),
(10, 20),
(11, 1),
(11, 2),
(12, 3),
(12, 4),
(13, 5),
(13, 6),
(14, 7),
(14, 8),
(15, 9),
(15, 10),
(16, 11),
(16, 12),
(17, 13),
(17, 14),
(18, 15),
(18, 16),
(19, 17),
(19, 18),
(20, 19),
(20, 20); 

-- Poblar la tabla User
INSERT INTO "User  " (email, name, password, image) VALUES
('user21@example.com', 'Uma', 'password21', 'https://example.com/image21.jpg'),
('user22@example.com', 'Vera', 'password22', 'https://example.com/image22.jpg'),
('user23@example.com', 'Walt', 'password23', 'https://example.com/image23.jpg'),
('user24@example.com', 'Xena', 'password24', 'https://example.com/image24.jpg'),
('user25@example.com', 'Yara', 'password25', 'https://example.com/image25.jpg'),
('user26@example.com', 'Zane', 'password26', 'https://example.com/image26.jpg'),
('user27@example.com', 'Ava', 'password27', 'https://example.com/image27.jpg'),
('user28@example.com', 'Ben', 'password28', 'https://example.com/image28.jpg'),
('user29@example.com', 'Cleo', 'password29', 'https://example.com/image29.jpg'),
('user30@example.com', 'Derek', 'password30', 'https://example.com/image30.jpg'),
('user31@example.com', 'Ella', 'password31', 'https://example.com/image31.jpg'),
('user32@example.com', 'Finn', 'password32', 'https://example.com/image32.jpg'),
('user33@example.com', 'Gina', 'password33', 'https://example.com/image33.jpg'),
('user34@example.com', 'Hugo', 'password34', 'https://example.com/image34.jpg'),
('user35@example.com', 'Iris', 'password35', 'https://example.com/image35.jpg'),
('user36@example.com', 'Jake', 'password36', 'https://example.com/image36.jpg'),
('user37@example.com', 'Lara', 'password37', 'https://example.com/image37.jpg'),
('user38@example.com', 'Milo', 'password38', 'https://example.com/image38.jpg'),
('user39@example.com', 'Nora', 'password39', 'https://example.com/image39.jpg'),
('user40@example.com', 'Owen', 'password40', 'https://example.com/image40.jpg');

