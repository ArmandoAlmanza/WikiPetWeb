/* tablas del sistema DELETED, INSERTED*/
/* cada que se elimine un departamento en la tabla DEPT,  SE BORRAN LOS EMPLEADOS
de la tabla EMP donde el DEPT_NO = DEPT_NO de la tabla DELETED*/
CREATE TRIGGER [BORRADOR] ON DEPT -- NOMBRE DE LA TABLA A AFECTAR
FOR DELETE AS
DELETE FROM
  EMP
FROM
  EMP,
  DELETED
WHERE
  EMP.DEPT_NO = DELETED.DEPT_NO 
  ---------------------------------------------------------------
SELECT
  *
FROM
  DEPT
WHERE
  DEPT_NO = 10
SELECT
  *
FROM
  EMP
WHERE
  DEPT_NO = 10
DELETE FROM
  DEPT
WHERE
  DEPT_NO = 10


  /*CREAR UN TRIGGER QUE ALMACENE EN UNA TABLA (t_altas_EMP) LA FECHA Y EL  NOMBRE DEL
  EMPLEADO QUE SE INSERTO EN LA TABLA  EMP*/

SELECT
  GETDATE() --paso 1. Creamos la tabla
  CREATE TABLE t_altas_EMP (Nombre varchar(25), Fecha_alta datetime) --paso 2: crear el trigger
  ALTER TRIGGER registro_altas ON EMP -- NOMBRE DE LA TABLA A AFECTAR
  FOR
INSERT
  AS
INSERT INTO
  t_altas_EMP (Nombre, Fecha_alta)
SELECT
  Apellido,
  Fecha_Alt
from
  INSERTED 
  -------------------------------------------
  --CADA QUE SE INSERTA UN DATO EN EMP, SE HACE UN SELECT DEL REGISTRO QUE SE ACABA
  -- DE INSERTAR

  CREATE TRIGGER INSERTAR_EMP ON EMP FOR
INSERT
  AS
SELECT
  *
FROM
  INSERTED 
  ---------------------------------------------------------------------------------
INSERT INTO
  EMP (
    [Emp_No],
    [Apellido],
    [Oficio],
    [Dir],
    [Fecha_Alt],
    [Salario],
    [Comision],
    [Dept_No]
  )
VAlUES(
    222,
    'LOPEZ',
    'INTENDENCIA',
    10,
    '2022-04-20',
    500.50,
    100.00,
    20
  ) ---------------------------------------
SELECT
  *
FROM
  t_altas_EMP