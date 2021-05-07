select * from db.pets;

select * from db.friends;

SELECT F.friend_id, F.friend_name, P.pet_id, P.owner_id, P.pet_name
FROM db.friends AS F
LEFT JOIN db.pets AS P
ON F.friend_id = P.owner_id;
