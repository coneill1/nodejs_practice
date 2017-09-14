CREATE TABLE inventory (
    id INT(11) NOT NULL AUTO_INCREMENT,
    cat VARCHAR(30),
    schedule_id INT(11),
    img_file VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE schedule (
    id INT(11) NOT NULL AUTO_INCREMENT,
    start_date DATE,
    end_date DATE,
    booked TINYINT(1),
    PRIMARY KEY(id)
);