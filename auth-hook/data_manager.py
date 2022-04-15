from psycopg2.extras import RealDictCursor
import database_connection

@database_connection.connection_handler
def get_user_id(cursor, token):
    cursor.execute(""" SELECT tokens.user_id FROM tokens
                        WHERE tokens.token =%(token)s""",
                   {
                       "token": token
                       })
    user_sql = cursor.fetchone()
    return "0" if user_sql is None else str(user_sql['id'])


@database_connection.connection_handler
def get_rolename(cursor, token):
    cursor.execute(""" SELECT tokens.role_name FROM tokens
                        WHERE tokens.token = %(token)s""",
                   {
                       "token": token
                       })
    roles_sql = cursor.fetchone()
    return "public" if roles_sql is None else roles_sql['rolename']