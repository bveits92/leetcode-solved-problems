# Write your MySQL query statement below
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    COUNT(DISTINCT order_id) AS order_count,
    COUNT(DISTINCT CASE WHEN invoice > 20 THEN customer_id END) AS customer_count
FROM Orders
WHERE invoice > 20
GROUP BY month
HAVING COUNT(DISTINCT CASE WHEN invoice > 20 THEN customer_id END) > 0
ORDER BY month;
