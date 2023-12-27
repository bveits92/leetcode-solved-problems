# Write your MySQL query statement below
-- Create a new table for product volumes
SELECT 
    w.name AS warehouse_name,
    SUM(p.Width * p.Length * p.Height * w.units) AS volume
FROM Warehouse w
INNER JOIN Products p ON w.product_id = p.product_id
GROUP BY w.name;
