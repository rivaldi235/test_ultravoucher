SELECT studens.id, studens.name, parents.parent_name
FROM studens
INNER JOIN parents ON studens.parent_id=parents.id;