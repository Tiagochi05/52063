# Inicio
hola, en este repositorio tenemos los archivos para poder ejecutar y utilizar el analizador que me toco hacer para la catedra de Sintaxis y Semantica de lenguajes, ⚠️antes de empezar:  
los requisitos previos son, en una pc tener instalado:
VS code, JDK 17 o superior, Node.js v16 o superior y npm(incluido con node)
## Clonar proyecto
empezemos con los pasos para clonar los archivos y poder usarlos en tu vs code:  
1.abrimos un cmd o powershell  
2.clonamos el git con el comando:  
#### git clone https://github.com/Tiagochi05/52063  
3.elegimos la carpeta 52063 con el comando:  
#### cd 52063  
4.abrimos los archivos con VS code utilizando el comando:  
#### code .  
![cmd con codigo](https://cdn.discordapp.com/attachments/1129998738941812738/1373767862551842937/image.png?ex=682b9c85&is=682a4b05&hm=3881234c8a35f0400538324c4abb2d0fc4c8bea9f48efe477504bbcbd52ef924&)  
luego de esto deberia abrirse el VS code y deberiamos ver los archivos:  
![visualizacion de los archivos](https://cdn.discordapp.com/attachments/1129998738941812738/1373768489747353680/image.png?ex=682b9d1b&is=682a4b9b&hm=68223a7cb0ba3ce4ad2d4d90a3454ef731c5938a6d04a3263d9c0fc76bc7ffec&)  
### Dentro de VS code  
Instalaremos o verificaremos que tenemos la extención de ANTLR4  
![instalacion pluggin](https://cdn.discordapp.com/attachments/1129998738941812738/1373769979027263599/image.png?ex=682b9e7e&is=682a4cfe&hm=7439301c67918bd936e905a524a78b09b0a0369efe3851f454097f35fc7916c6&)   
y procedemos.  
## Archivos clave
Los archivos que nos importan a nosotros son:  
-TestSuite.g4 (la gramatica)  
-Imput.txt (lo que entra a nuestro analizador)  
-los 4 archivos nombrados valido ó novalido    
estos ultimos son 4 ejemplos, 2 validos y 2 no, para probar en el analizador  

### modo de uso(arbol) 

Para que nuestro analizador ande vamos a copiar alguno de los archivos valido/novalido.txt, y vamos a pegarlo en el archivo llamado Imput.txt de manera que quede asi:  
![copiar y pegar ejemplo](https://cdn.discordapp.com/attachments/1129998738941812738/1373771876735647744/image.png?ex=682ba042&is=682a4ec2&hm=ad4b6b58b30712834ce994d1eaee56d4369a0e0431dbac93bf6b5a448e3503ba&)  
luego, no dirijimos a el archivo TestSuite.g4, el cual cuenta con nuestra gramatica y tocamos el pluggin de ANTlR4 para ver los tokens, parser rules de nuestra gramatica:  

![pluggin ANTLR4](https://cdn.discordapp.com/attachments/1129998738941812738/1373773285875122236/image.png?ex=682ba192&is=682a5012&hm=4ba7a6a07181f8ef09861ecd731cdee1b7af8eadbe3e1af630366b1b61dc4811&)  

:deciduous_tree: tocaremos F5 y se nos creara el arbol de derivacion:  

![arbol derivacion](https://cdn.discordapp.com/attachments/1129998738941812738/1373773756169850890/image.png?ex=682ba202&is=682a5082&hm=401cd2ec6de5b1e7e5726f76b14b4d6014bba60d42aafc07764e7562a24006c0&)  
### modo de uso(tabla lexemas)
luego usaremos abriremos un terminal y ejecutaremos el comando node index.js lo cual nos mostrara si la entrada es valida, una tabla de lexemas y el interprete.  
o nos dira que la entrada no es valida y el error en el caso de que la entrada no sea valida  

![node index.js](https://cdn.discordapp.com/attachments/1129998738941812738/1373775819905958020/image.png?ex=682ba3ee&is=682a526e&hm=7c24efb76aa170c8e30c3136bb7bf15aa4581ada463b0a07ba48a97b2cf2bbc4&)    

Pueden probar los 4 inputs que yo elegi y ver lo que pasa, cuales son los errores, que arbol genera, etc.... ó crear una entrada propia y directamente ponerla en el input.txt, siempre respetando la estructura de la gramatica.
