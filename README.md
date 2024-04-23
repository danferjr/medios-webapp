# Aplicación web Medios de Transmisión 
Creación de llaves
Crear llaves SSH nos permitirá modificar o acceder a nuestros repositorios en Github de forma segura:
```
    ssh-keygen -t ed25519 -C "tucorreogit@gmail.com"
    eval `ssh-agent -s`
    ssh-add ~/.ssh/id_ed25519
```
Realiza una aplicación web la cual le permita transmitir una determinada frecuencia a través de una linea de transmisión.

Leer los requisitos funcionales
