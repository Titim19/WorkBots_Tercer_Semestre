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

            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s) ' # Placeholder
            valores = ('Carlos', 'Lara', 'clara@gmail.com') #es una tupla
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            # conexion.commit() # esto no lo vamos a usar, se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount # Recupera todos los registros de la sentencia, que seran una lista
            print(f'Los registros insertados son: {registros_insertados}')

   # cursor.close() el uso de with hace que el cursor cierre solo
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()