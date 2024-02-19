[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/z4vaYN23)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13922301&assignment_repo_type=AssignmentRepo)
# RECAP FOR CODING BASICS

Este ejercicio tienen como objetivo dar un repaso a lo más básico de la programacón fomentando que el estudiante realice por si mismo pruebas, genere dudas y se responda a si mismo las preguntas más comunes que surgen al empezar a programar en un nuevo lenguaje de programación (Enfocado a Python 2024).

Es responzabilidad del alumno adaptar el laboratorio al lenguaje de programación que pretende aprender.

## Step1

1.  Clona el repositorio en tu local
2.  crea un nuevo archivo llamado ```entregable_{nombre}_{apellido}.{extensión}```
3.  Ejecuta el código en la terminal con 
    ```linux
    python progRecap01.py
    ```
4. Agrega como un comentario al inicio del archivo las respuestas a las preguntas que se van a realizar durante el ejercicio
### pregunta 1
Al descomentar las línea 14, 15 y 16 y comentar las 9, 10 y 11 el resultado es el mismo
¿Cómo es que funciona entonce un for en python?
¿qué significa f"{}" en el print?
>para otros lenguajes: ¿cómo programarías el famos foreash y cómo funciona?
>¿Cómo embebes una cadena en el lenguaje seleccionado?

# Step 2
1.  Comenta las líneas 14,15 y 16
2.  Descomenta el siguiente código en las líneas 19 a 25
```python
for quality in qualities:
    prompt=input(f"Es {quality}? (Y/N)")
    if(prompt=='N'):
        print("no te conviene")
        break
if(prompt =='Y'):
    print("Apurese o se lo ganan")
```

3. Modifica el código para que quede de la siguiente manera
```python
score =0
for quality in qualities:
    prompt=input(f"Es {quality}? (Y/N)")
    if(prompt!='N'):
        score=+1

if(score>4):
    print("Apurese o se lo ganan")
elif(score>2):
    print("Maomeno")
else:
    print("no te conviene")
```
### pregunta 2
¿Describe qué hace el código?
¿Existe switch en python?

> para otros lenguajes: Transcribe el código a el lenguaje escogido
>utiliza switch si tu lenguaje lo soporta

# Step 3

1.  Busca la línea  que contiene el comentario ```##append to array``` y analiza las siguientes 6 líneas
2.  descomenta y analaiza el resto del código

### pregunta 3
¿Dónde está declarado el arreglo que se utiliza para qualities?
Razona el ¿cómo? funciona el llamado de una función dentro de un if y cómo funciona el llamado de una función dentro de una función, discutela con un compañero o tu patito de hule y escribe tu cinclución
¿Cuál es el objetivo de la variable flag?

>Para otros lenguajes: transcribe el código tratando de utilizar las fucnciones dentro de otras funciones

# Setep 4

1. Investiga cómo declarar una función
2. Crea las siguientes funciones utilizando el código del archivo progRecap01.py
- imprimir_cualidades
- cuestionar_cualidades
- agregar_cualidades
- calcular_score
>Para otros lenguajes: Utiliza el código que transcribiste
2. Crea un programa que pregunte al usuario las n cualudades que busca en una pareja, realice el cuestionario de esas cualidades y dependiendo del total dar las respuestas siguientes:
- 100% Es perfecto
- \>= 80% Apliquese o se lo ganan
- \>= 60% Maomeno
- \>= 40% No te lo recomiendo
- <=20% o menos Corre y no mires atrás 

### pregunta 4
Escribe el código resultante del paso 4 al archivo donde estas escribiendo las respuestas

## Step5
1. guarda los cambios en el archivo ```entregable_{nombre}_{apellido}.{extensión}```
2. agrega los cambios de ese archivo únicamente al repositorio 
3. realiza un commit con el comentario "entregable"
4. realiza tu push a la rama principal

Espera la retroalimentación del profesor