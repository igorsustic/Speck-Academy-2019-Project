INSERT INTO users (user_id, first_name, last_name, email, user_password, date_created, date_updated) VALUES
    ('54873cf2-5414-4912-b3ba-c133e9f9119e', 'Igor', 'Sustic', 'igor.sustic@gmail.com', 'password', DEFAULT, DEFAULT),
    ('9ca8c98c-7c64-471a-bc12-d8e2779a2899', 'Pero', 'Peric', 'pero.peric@gmail.com', 'password', DEFAULT, DEFAULT),
    ('5f094974-a7f7-4ce6-9526-7d8e7f19c153', 'Miro', 'Miric', 'miro.miric@gmail.com', 'password', DEFAULT, DEFAULT),
    ('ebb70d70-c827-4778-aa95-94d0023e56d6', 'Dado', 'Dadic', 'dado.dadic@gmail.com', 'password', DEFAULT, DEFAULT);
    
INSERT INTO login_session (login_session_id, session_id , date_created, date_updated, user_id) VALUES
    ('e80dac47-8966-4cac-8576-115fb0d9ade9', '9ef87383-0491-4d9d-bddd-ca28fc97d045', DEFAULT, DEFAULT, '54873cf2-5414-4912-b3ba-c133e9f9119e'),
    ('00d1ff06-384d-4adc-9dac-c3e34b9de1af', 'a5c7d113-5ddf-4787-ac81-2de72df343cf', DEFAULT, DEFAULT, '9ca8c98c-7c64-471a-bc12-d8e2779a2899'),
    ('7c0dd3ba-74e3-4a86-aab1-4ed35e7ee9ac', 'da0d0bce-464a-4601-ad09-3749a1250d3a', DEFAULT, DEFAULT, '5f094974-a7f7-4ce6-9526-7d8e7f19c153'),
    ('c5d0f440-d4bf-4e26-b683-a9e298ee45ba', '30394e86-2fe6-4161-bf28-088ddac7fb20', DEFAULT, DEFAULT, 'ebb70d70-c827-4778-aa95-94d0023e56d6');
    
INSERT INTO halls (hall_id, hall_name, hall_address, size, date_created, date_updated) VALUES
    ('f8801dec-35cc-4f0a-afd2-4476bc1ba54c', 'Koncertna dvorana', 'Josipa Jelačića 13', 3000, DEFAULT, DEFAULT),
    ('73922cec-2db1-4d84-9ad8-2c4b60e4269c', 'Sportska dvorana', 'Ivana Mazuranića 1', 2000, DEFAULT, DEFAULT),
    ('9174ca60-9803-46f1-94ce-2f4a06222fc9', 'Kino dvorana', 'Eugena Kvaternika 23', 1000, DEFAULT, DEFAULT),
    ('8f71a972-1415-4d43-b0ab-0f535aeeeb33', 'Kongresna dvorana', 'Ante Starčevića 16', 1500, DEFAULT, DEFAULT);

INSERT INTO reservations (reservation_id, reservation_status, reserved_from, reserved_until, date_created, date_updated, hall_id) VALUES
    ('b9faf13c-178e-4874-9d8f-7a3ce1f02dc0', 1, '2019-01-01 00:00:00', '2019-12-31 23:59:59', DEFAULT, DEFAULT, '73922cec-2db1-4d84-9ad8-2c4b60e4269c'),
    ('710e7d40-bc18-4d59-9250-ecc701d078ff', 1, '2019-03-01 00:00:00', '2019-07-31 23:59:59', DEFAULT, DEFAULT, '9174ca60-9803-46f1-94ce-2f4a06222fc9');

