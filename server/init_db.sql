CREATE TABLE services (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	description TEXT
);

CREATE TABLE vetlist (
	id SERIAL PRIMARY KEY,
	title VARCHAR(240) NOT NULL,
	adress VARCHAR(240) NOT NULL,
	contacts VARCHAR(240) NOT NULL
);

CREATE TABLE vetlist_services (
	vet_id int REFERENCES vetlist (id) ON DELETE CASCADE,
	service_id int REFERENCES services (id) ON DELETE CASCADE,
	CONSTRAINT vetlist_services_pkey PRIMARY KEY (vet_id, service_id)
);

INSERT INTO vetlist (id, title, adress, contacts)
		values(1, 'The Juilliard School', '098 Londonderry Alley', '205-216-8574');
INSERT INTO vetlist (id, title, adress, contacts)
		values(2, 'National Academy for Physical Education and Sports Bucharest', '62 Barnett Trail', '225-325-8184');
INSERT INTO vetlist (id, title, adress, contacts)
		values(3, 'Universidad del Istmo', '42513 Cottonwood Terrace', '756-327-5234');
INSERT INTO vetlist (id, title, adress, contacts)
		values(4, 'American International University - Bangladesh', '55424 Macpherson Way', '163-294-1722');
INSERT INTO vetlist (id, title, adress, contacts)
		values(5, 'Kiev Slavonic University', '0992 Stang Crossing', '103-743-3473');
INSERT INTO vetlist (id, title, adress, contacts)
		values(6, 'Hanshin University', '3024 Glacier Hill Road', '275-298-7621');
INSERT INTO vetlist (id, title, adress, contacts)
		values(7, 'Pázmány Péter Catholic University', '69 Melody Point', '203-923-4416');
INSERT INTO vetlist (id, title, adress, contacts)
		values(8, 'Sahmyook University', '572 Lyons Crossing', '542-834-4677');
INSERT INTO vetlist (id, title, adress, contacts)
		values(9, 'University of Piraeus', '1 Browning Drive', '895-838-8187');
INSERT INTO vetlist (id, title, adress, contacts)
		values(10, 'Islamic University of Rotterdam', '228 Eggendart Junction', '912-785-8001');
INSERT INTO vetlist (id, title, adress, contacts)
		values(11, 'Columbia College Hollywood', '070 Buena Vista Center', '438-463-5198');
INSERT INTO vetlist (id, title, adress, contacts)
		values(12, 'Universidad Metropolitana de Honduras', '3723 Rigney Center', '362-917-1444');
INSERT INTO vetlist (title, adress, contacts)
		values('Politeknik Negeri Padang', '3 Killdeer Road', '974-815-0655');
INSERT INTO services
		VALUES(1, 'Кастрація', 'Невеликий опис цього сервісу'), (2, 'Лікування', 'Невеликий опис цього сервісу'), (3, 'Щеплення', 'Невеликий опис цього сервісу'), (4, 'Купування', 'Невеликий опис цього сервісу');
INSERT INTO vetlist_services
		VALUES(1, 1), (1, 3), (2, 1), (2, 2), (2, 4), (3, 1), (3, 3), (3, 4), (4, 2), (4, 4);
		
SELECT
	pg_catalog.setval(pg_get_serial_sequence('vetlist', 'id'), MAX(id))
FROM
	vetlist;

SELECT
	pg_catalog.setval(pg_get_serial_sequence('services', 'id'), MAX(id))
FROM
	services;