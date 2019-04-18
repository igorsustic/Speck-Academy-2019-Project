/*
Create DB schema for our project
- Dvorane
popis dvorana, osnovne informacije
- Rezervacije
approved’ ili 'reservationStatus', ili sl., statusi: ‘pending’, ‘approved’, ‘denied’, ako je ‘pending’ onda se vodi kao zahtjev, ako je ‘approved’, tj. odobrena onda se vodi kao rezervacija i onemogućuje se daljnja rezervacija u tom periodu
ostale kolumne u rezervaciji
- Korisnici
popis administratora (login info i sl.)
- Sessions
za držanje admin login sesija
*/

create table users (
    user_id         uuid NOT NULL PRIMARY KEY,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    email           VARCHAR(50) NOT NULL,
    user_password   VARCHAR(50) NOT NULL,
    date_created    TIMESTAMP DEFAULT NOW(),
    date_updated    TIMESTAMP DEFAULT NOW()
);

create table login_session (
    login_session_id    uuid NOT NULL PRIMARY KEY,
    session_id          VARCHAR(255),
    date_created        TIMESTAMP DEFAULT NOW(),
    date_updated        TIMESTAMP DEFAULT NOW(),
    user_id            uuid REFERENCES users(user_id),
);

create table halls (
    hall_id         uuid NOT NULL PRIMARY KEY,
    hall_name       VARCHAR(100) NOT NULL,
    hall_address    VARCHAR(200) NOT NULL,
    size            INT NOT NULL,
    date_created    TIMESTAMP DEFAULT NOW(),
    date_updated    TIMESTAMP DEFAULT NOW()
);

create table reservations (
    reservation_id      uuid NOT NULL PRIMARY KEY,
    reservation_status  SMALLINT NOT NULL,
    reserved_from       TIMESTAMP,
    reserved_until      TIMESTAMP,
    date_created        TIMESTAMP DEFAULT NOW(),
    date_updated        TIMESTAMP DEFAULT NOW(),
    hall_id             uuid REFERENCES halls(hall_id)
);