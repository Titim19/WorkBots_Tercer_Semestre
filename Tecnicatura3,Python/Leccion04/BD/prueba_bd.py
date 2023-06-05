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

            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # Placeholder
            id_persona = input('Digite un numero para el id_persona: ') # Se pide el valor como un parametro, que desp lo pasa como tupla
            cursor.execute(sentencia, (id_persona,)) # De esta manera ejecutamos la sentencia
            registros = cursor.fetchone() # Recupera todos los registros de la sentencia, que seran una lista
            for registro in registros:
                print(registro)

   # cursor.close() el uso de with hace que el cursor cierre solo
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html