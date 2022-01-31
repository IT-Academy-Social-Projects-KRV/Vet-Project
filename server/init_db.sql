CREATE TABLE services (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL
);

CREATE TABLE  animal_types(
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL
);

CREATE TABLE vetlist (
	id SERIAL PRIMARY KEY,
	title VARCHAR(240) NOT NULL,
	adress VARCHAR(240) NOT NULL,
	phone VARCHAR(240) NOT NULL,
	email VARCHAR(240) NOT NULL,
	map_link TEXT NOT NULL
);

CREATE TABLE vetlist_services (
	vet_id int REFERENCES vetlist (id) ON DELETE CASCADE,
	service_id int REFERENCES services (id) ON DELETE CASCADE,
	CONSTRAINT vetlist_services_pkey PRIMARY KEY (vet_id, service_id)
);

CREATE TABLE animals (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	gender VARCHAR(50),
	breed VARCHAR(50),
	age INT,
	shelter_name VARCHAR(30) NOT NULL,
    curator VARCHAR(30) NOT NULL,
  	short_info TEXT,
	behavioral_features TEXT,
	wishes_for_shelter TEXT	
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
email varchar(250) NOT NULL UNIQUE,
password varchar(250) NOT NULL
);


INSERT INTO animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (1, 'Colobus, magistrate black', 'F', 'Colobus guerza', 1, 'Приватний притулок для собак', 'Мамчур Аліса Бекішівна', 'Маленьку дівчинку підібрали та принесли до притулку', 'Міка дуже ніжна кішечка, любить ласку і увагу, обожнює гратися.', 'Подарує своєму господареві радість і всю свою неосяжну любов!');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator,  short_info, behavioral_features, wishes_for_shelter) 
VALUES (2, 'Buffalo, asian water', 'F', 'Bubalus arnee', 2, 'Надія', 'Мамчур Аліса Бекішівна', 'Чарівне кошеня, малюк Міккі - в терміновому пошуку найкращої родини!', 'Кошеня знає горщик, щеплене та оброблене від паразитів, по досягненню віку – допоможемо зі стерилізацією.', 'В квартиру або дім без самовигулу.');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (3, 'Hanuman langur', 'M', 'Semnopithecus entellus', 3, 'Затишна домівка', 'Наталія Канюк', 'Білочка - сніжна, розкішна красуня. Її доля була складною. Білочка довго жила на вулиці і ледь виживала..', 'Стерилізована, щеплена, оброблена. Готова до домашнього життя', 'Шукаємо для киці родину, де буде спокійно і де будуть чекати, коли киця звикне і довіриться, так як довірилася спочатку своєму опікуну, а потім лікарям');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (4, 'Dusky rattlesnake', 'M', 'Crotalus triseriatus', 4, 'Приватний притулок для собак', 'Мамчур Аліса Бекішівна', 'Маленьку дівчинку підібрали та принесли до притулку', 'Міка дуже ніжна кішечка, любить ласку і увагу, обожнює гратися.', 'Подарує своєму господареві радість і всю свою неосяжну любов!');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (5, 'Otter, giant', 'F', 'Pteronura brasiliensis', 5, 'Надія', 'Мамчур Аліса Бекішівна', 'Чарівне кошеня, малюк Міккі - в терміновому пошуку найкращої родини!', 'Кошеня знає горщик, щеплене та оброблене від паразитів, по досягненню віку – допоможемо зі стерилізацією.', 'В квартиру або дім без самовигулу.');
INSERT INTO animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (6, 'Dik, kirk''s dik', 'M', 'Madoqua kirkii', 6, 'Затишна домівка', 'Наталія Канюк', 'Білочка - сніжна, розкішна красуня. Її доля була складною. Білочка довго жила на вулиці і ледь виживала..', 'Стерилізована, щеплена, оброблена. Готова до домашнього життя', 'Шукаємо для киці родину, де буде спокійно і де будуть чекати, коли киця звикне і довіриться, так як довірилася спочатку своєму опікуну, а потім лікарям');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (7, 'Pine squirrel', 'F', 'Tamiasciurus hudsonicus', 7, 'Приватний притулок для собак', 'Мамчур Аліса Бекішівна', 'Маленьку дівчинку підібрали та принесли до притулку', 'Міка дуже ніжна кішечка, любить ласку і увагу, обожнює гратися.', 'Подарує своєму господареві радість і всю свою неосяжну любов!');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (8, 'Long-billed corella', 'M', 'Cacatua tenuirostris', 8, 'Надія', 'Мамчур Аліса Бекішівна', 'Чарівне кошеня, малюк Міккі - в терміновому пошуку найкращої родини!', 'Кошеня знає горщик, щеплене та оброблене від паразитів, по досягненню віку – допоможемо зі стерилізацією.', 'В квартиру або дім без самовигулу.');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (9, 'Crow, american', 'M', 'Corvus brachyrhynchos', 9, 'Затишна домівка', 'Наталія Канюк', 'Білочка - сніжна, розкішна красуня. Її доля була складною. Білочка довго жила на вулиці і ледь виживала..', 'Стерилізована, щеплена, оброблена. Готова до домашнього життя', 'Шукаємо для киці родину, де буде спокійно і де будуть чекати, коли киця звикне і довіриться, так як довірилася спочатку своєму опікуну, а потім лікарям');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (10, 'Fox, grey', 'M', 'Vulpes cinereoargenteus', 10, 'Приватний притулок для собак', 'Мамчур Аліса Бекішівна', 'Маленьку дівчинку підібрали та принесли до притулку', 'Міка дуже ніжна кішечка, любить ласку і увагу, обожнює гратися.', 'Подарує своєму господареві радість і всю свою неосяжну любов!');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (11, 'Blue peacock', 'M', 'Pavo cristatus', 11, 'Надія', 'Мамчур Аліса Бекішівна', 'Чарівне кошеня, малюк Міккі - в терміновому пошуку найкращої родини!', 'Кошеня знає горщик, щеплене та оброблене від паразитів, по досягненню віку – допоможемо зі стерилізацією.', 'В квартиру або дім без самовигулу.');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (12, 'Booby, blue-footed', 'M', 'Sula nebouxii', 12, 'Затишна домівка', 'Наталія Канюк', 'Білочка - сніжна, розкішна красуня. Її доля була складною. Білочка довго жила на вулиці і ледь виживала..', 'Стерилізована, щеплена, оброблена. Готова до домашнього життя', 'Шукаємо для киці родину, де буде спокійно і де будуть чекати, коли киця звикне і довіриться, так як довірилася спочатку своєму опікуну, а потім лікарям');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (13, 'Partridge, coqui', 'F', 'Francolinus coqui', 13, 'Приватний притулок для собак', 'Мамчур Аліса Бекішівна', 'Маленьку дівчинку підібрали та принесли до притулку', 'Міка дуже ніжна кішечка, любить ласку і увагу, обожнює гратися.', 'Подарує своєму господареві радість і всю свою неосяжну любов!');
INSERT INTO animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (14, 'Indian leopard', 'F', 'Panthera pardus', 14, 'Надія', 'Мамчур Аліса Бекішівна', 'Чарівне кошеня, малюк Міккі - в терміновому пошуку найкращої родини!', 'Кошеня знає горщик, щеплене та оброблене від паразитів, по досягненню віку – допоможемо зі стерилізацією.', 'В квартиру або дім без самовигулу.');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (15, 'Goose, greylag', 'F', 'Anser anser', 15, 'Затишна домівка', 'Наталія Канюк', 'Білочка - сніжна, розкішна красуня. Її доля була складною. Білочка довго жила на вулиці і ледь виживала..', 'Стерилізована, щеплена, оброблена. Готова до домашнього життя', 'Шукаємо для киці родину, де буде спокійно і де будуть чекати, коли киця звикне і довіриться, так як довірилася спочатку своєму опікуну, а потім лікарям');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (16, 'Deer, barasingha', 'M', 'Cervus duvauceli', 16, 'Приватний притулок для собак', 'Мамчур Аліса Бекішівна', 'Маленьку дівчинку підібрали та принесли до притулку', 'Міка дуже ніжна кішечка, любить ласку і увагу, обожнює гратися.', 'Подарує своєму господареві радість і всю свою неосяжну любов!');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES(17, 'Bontebok', 'F', 'Damaliscus dorcas', 17, 'Надія', 'Мамчур Аліса Бекішівна', 'Чарівне кошеня, малюк Міккі - в терміновому пошуку найкращої родини!', 'Кошеня знає горщик, щеплене та оброблене від паразитів, по досягненню віку – допоможемо зі стерилізацією.', 'В квартиру або дім без самовигулу.');
INSERT INTO  animals (id, name, gender, breed, age, shelter_name, curator, short_info, behavioral_features, wishes_for_shelter) 
VALUES (18, 'Steenbok', 'M', 'Raphicerus campestris', 18, 'Затишна домівка', 'Наталія Канюк', 'Білочка - сніжна, розкішна красуня. Її доля була складною. Білочка довго жила на вулиці і ледь виживала..', 'Стерилізована, щеплена, оброблена. Готова до домашнього життя', 'Шукаємо для киці родину, де буде спокійно і де будуть чекати, коли киця звикне і довіриться, так як довірилася спочатку своєму опікуну, а потім лікарям');


INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(1, 'The Juilliard School', '098 Londonderry Alley', '205-216-8574', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(2, 'National Academy for Physical Education and Sports Bucharest', '62 Barnett Trail', '225-325-8184', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(3, 'Universidad del Istmo', '42513 Cottonwood Terrace', '756-327-5234', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(4, 'American International University - Bangladesh', '55424 Macpherson Way', '163-294-1722', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(5, 'Kiev Slavonic University', '0992 Stang Crossing', '103-743-3473', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(6, 'Hanshin University', '3024 Glacier Hill Road', '275-298-7621', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(7, 'Pázmány Péter Catholic University', '69 Melody Point', '203-923-4416', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(8, 'Sahmyook University', '572 Lyons Crossing', '542-834-4677', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(9, 'University of Piraeus', '1 Browning Drive', '895-838-8187', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(10, 'Islamic University of Rotterdam', '228 Eggendart Junction', '912-785-8001', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(11, 'Columbia College Hollywood', '070 Buena Vista Center', '438-463-5198', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO vetlist (id, title, adress, phone, email, map_link)
		VALUES(12, 'Universidad Metropolitana de Honduras', '3723 Rigney Center', '362-917-1444', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');

    
INSERT INTO vetlist (title, adress, phone, email, map_link)
		VALUES('Politeknik Negeri Padang', '3 Killdeer Road', '974-815-0655', 'example@gmail.com', 'https://www.google.com/maps/search/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%96+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B8/@50.6246365,26.2239432,14z/data=!3m1!4b1');
INSERT INTO services
		VALUES(1, 'Хірургія'), (2, 'Травматолог'), (3, 'Стоматологія'), (4, 'Консультація'), (5, 'Чіпування'), (6, 'Оформлення документів'), (7, 'Вакцинація(Щеплення)'), (8, 'Стаціонар'), (9, 'Акушерство'), (10, 'УЗД'), (11, 'Терапія'), (12, 'Лаболаторна діагностика'), (13, 'Офтальмологія'), (14, 'Дерматологія'), (15, 'Стерилізація'), (16, 'Нефрологія'), (17, 'Інфекційні захворювання'), (18, 'Онкологія'), (19, 'Неврологія'), (20, 'Профілактичні заходи');
INSERT INTO vetlist_services
		VALUES(1, 1), (1, 3), (2, 1), (2, 2), (2, 4), (3, 1), (3, 3), (3, 4), (4, 2), (4, 4);

INSERT INTO animal_types
		VALUES(1, 'Птахи'),(2, 'Гризуни'),(3, 'Рептилії'),(4, 'Дикі тварини'),(5, 'Домашні тварини');


INSERT INTO users ( id, email, password) VALUES (1 , 'admin@gmail.com', '$2a$10$qd7j8HJTlEgjtuvl6jNy0uV1mIS0zJuk2L9AayG1cYFLdlW5cYq3G')

SELECT
	pg_catalog.setval(pg_get_serial_sequence('animals', 'id'), MAX(id))
FROM
	animals;	

SELECT
	pg_catalog.setval(pg_get_serial_sequence('vetlist', 'id'), MAX(id))
FROM
	vetlist;

SELECT
	pg_catalog.setval(pg_get_serial_sequence('services', 'id'), MAX(id))

FROM
	services;


