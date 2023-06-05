import psycopg2 #esto es para poder conectarnos a postgre

conexion = psycopg2.connect(
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:

            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ('Manuela', 'Perez', 'mperez@gmail.com', 3),
                ('Daniela', 'Rizza', 'danielitarizza@gmail.com', 5),
                ('Nicolas', 'Ferro', 'ingnicolasferro@gmail.com', 1)
            ) #es una tupla de tuplas
            cursor.executemany(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

   # cursor.close() el uso de with hace que el cursor cierre solo
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()