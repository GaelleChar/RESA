SELECT ROW_TO_JSON(user_info) FROM (
2		SELECT
                    CONCAT(t.first_name, ' ', t.last_name) AS t.name,
3					t.name,
4					t.budget,
5					t.spend,

11		FROM		users t
14		GROUP BY	t.name, t.budget, t.spend
16	) AS user_info