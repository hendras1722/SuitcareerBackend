## Cara Pakai

step 1:
1. git Clone https://github.com/hendras1722/SuitcareerBackend.git
2. cd SuitcareerBackend
3. buka CMD
4. npm install
5. npm start

step 2:
1. import file sql yang bernama testbackend.sql ke phpmyadmin, dbeave, atau aplikasi lainnya

step 3: 
1. install postman 
2. import postman menggunakan link ini https://www.getpostman.com/collections/a65dbf6d0ef5d490fca3
3. masuk ke step 1 apabila sudah npm start cukup ketik rs+enter. jika belum npm start

## Alur 

1. Buat lokasi terlebih dahulu
/location/create
result: 
{
    "status": 200,
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}

2. Buat event, untuk lokasi ambil id ke id_lokasi
/event/create
result:
{
    "status": 200,
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}

3. Buat Tiket, untuk tiket idnya masukkan id event
/event/ticket/create
result: 
{
    "status": 200,
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}

4. Apabila ingin melihat event
/event/get_info atau /event/get_info?name=music
{
    "status": 200,
    "result": [
        {
            "id": "b85f2166-14ab-4c6b-bdd4-a279d5f233ce",
            "name": "Music",
            "lokasi": "Surakarta",
            "created_at": "2020-12-15T06:54:38.000Z",
            "updated_at": "2020-12-15T06:54:38.000Z"
        }
    ]
}

5. melakukan pembayaran tiket
/transaction/purchase
{
    "status": 200,
    "result": {
        "fieldCount": 0,
        "affectedRows": 2,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "(Rows matched: 2  Changed: 2  Warnings: 0",
        "protocol41": true,
        "changedRows": 2
    }
}

6. melihat detail transaksi
/transaction/get_info
{
    "status": 200,
    "result": [
        {
            "id": "50d86db6-6a56-4a24-a7a8-405479e44fe5",
            "name": "Music",
            "price": 100000
        }
    ]
}
