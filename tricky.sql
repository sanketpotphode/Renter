--=============== -*FOR THIRD HIGHEST SALARY* ==========================

-- 1 way

Select top 1 from (select top 3 salary from emp order by salary desc)
order by asc


-- 2 way

SELECT TOP 1 salary 
FROM (
 SELECT DISTINCT TOP 3 salary FROM Employee ORDER BY salary DESC 
 ) AS temp 
ORDER BY salary

-- ====================================================================

-- 6th highest
select * from ((select * from Employee 
ORDER BY `sal` DESC limit 6 ) AS T) 
ORDER BY T.`sal` ASC limit 1;



-- n th highest salary 

SELECT * FROM Employee WHERE sal = 
(
 SELECT MIN(sal) FROM Employee 
 WHERE sal IN (
   SELECT DISTINCT TOP N
    sal FROM Employee 
    ORDER BY sal DESC
  )
  )

-- Group by -------------------------------------------------------------------------------

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


-- age wize count on employee --------------------------------------------------------------

SELECT COUNT(EmployeeID), age
FROM Employees
GROUP BY age;
-- 
Thanks & Regards,

 Sanket Potphode
Software Developer,Plus91 Technologies+917887746393|www.plus91.in|sanket.potphode@plus91.in