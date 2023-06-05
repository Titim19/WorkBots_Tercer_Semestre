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

            sentencia = 'DELETE FROM persona WHERE id_persona = %s'
            entrada = input('Digite el numero de valores de registro a eliminar: ')
            valores = (entrada, ) #es una tupla de valores
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')

   # cursor.close() el uso de with hace que el cursor cierre solo
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()