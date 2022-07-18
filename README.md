# CRUD para agentes de seguros

## Caracteristicas de este proyecto y modelos de bases de datos

## modelos

```js
    const client = {
        complete_name: 'nombre completo',
        phone: '9992372312',
        password : 'password'
    }

    const agent = {
        complete_name: 'nombre completo',
        email: 'email@example.com',
        password: 'password'
    }

    const insured = { 
        complete_name: 'nombre completo',
        edad: 18
    }


    const policy = {
        start_date_policy: '2022-07-18',
        effective_date_policy: '2022-07-18',
        client_contrated_policy: 3221,
        insured_person: '12312',
        insured_carrier: 'LIFE GOLD',
        type_policy: 'AUTO',
        price: '345',
        start_policy: 'VIGENTE'
    }


```

## pasos para usar este proyecto
> installacion de dependencias
```bash
npm install
```

### crear un archivo .env al mismo nivel que el .env.example y copiar su contenido

```
touch .env
```

### crear la base de datos en mysql, se puede dockerizar con el siguiente comando
```bash
sudo docker run -p 3306:3306 -d --name mysql8 -e MYSQL_ROOT_PASSWORD=secretpassword mysql:8.0
```

### una vez creada la base de datos ya podemos utilizar los endpoint configurados en esta aplicacion

## Se recomienda uso de software para probar apis como postman.

### paso 1 registrarse en el sistema (signup)
```plaintext
  path: http://localhost:3000/v1/signup
```

### json correspondiente al endpoint
```json
{
	"complete_name": "victor chan",
    "email":"victor@gamil.com",
	"password": "pass123"
}
```

## respuesta del servidor esperada
```json
{
    "message": "agent created successfully",
    "agentCreated": {
        "id": "aee15db9-5c63-4c24-9472-091b72eaf6cd",
        "complete_name": "victor chan",
        "email": "victor@gamil.com",
        "password": "$2b$08$7Q.29NXlbLfct/qyyz5W3eo6H1ygGrgy2XakS0BjOk9RY249M01D2",
        "updatedAt": "2022-07-18T05:53:15.258Z",
        "createdAt": "2022-07-18T05:53:15.258Z"
    }
}
```

## Paso 2 iniciar sesion (autenticarse)

```plaintext
path: http://localhost:3000/v1/login
```

### json correspondiente al endpoint
```json
{
    "email":"victor@gamil.com",
	"password": "pass123"
}
```


## respuesta del servidor esperada
```json
{
	"email": "victor@gamil.com",
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTgxMjM5MTMsImRhdGEiOnsiZW1haWwiOiJ2aWN0b3JAZ2FtaWwuY29tIiwicGFzc3dvcmQiOiJwYXNzMTIzIn0sImlhdCI6MTY1ODEyMzc5M30.ItVAu6t1E8h8c1wKfiF251ekPAeP7-XYUL0_swISPlY"
}
```

## Apartir de este paso ya se puede utilizar el resto de los endpoints por ejemplo se vera a continuacuion la validacion cuando no nos hemos logueado en el sistema

### copiar el token generado como en el ejemplo anterior en la seccion de Headers y crear un nuevo  campo llamado authorization y ponerle como valor el token que copiamos , todo esto es en postman

```plaintext

path: http://localhost:3000/v1/client
```

# accion crear un cliente nuevo sin autenticarse

```json
{
    "complete_name": "victor",
    "phone": "999999999",
    "email": "victor@email.com"
}

```

### si no esta autenticado en el sistema , la respuesta sera 
```json
{
    "error": "The user has not been authenticated"
}
```

### de lo contrario la respuesta sera la instancia creada
```json
{
    {
    "id": "7c8af83b-37e4-4b91-bf2a-0cfc010e2b89",
    "complete_name": "victor",
    "phone": "999999999",
    "email": "victor@email.com",
    "updatedAt": "2022-07-18T06:06:34.175Z",
    "createdAt": "2022-07-18T06:06:34.175Z"
}
}
```
### paths para la actualizacion
```plaintext
   GET por id: http://localhost:3000/v1/client/7c8af83b-37e4-4b91-bf2a-0cfc010e2b89
   PUT : http://localhost:3000/v1/client/7c8af83b-37e4-4b91-bf2a-0cfc010e2b89   mas el body en postman
   GET ALL : http://localhost:3000/v1/clients
   DELETE: http://localhost:3000/v1/client/7c8af83b-37e4-4b91-bf2a-0cfc010e2b89
```