# Desafio React Native - My GPS - Tracking

## Objetivo:
Criar um app para IOS e Android que obtenha a localização do usuário utilizando a arquitetura Offline first para obter e armazenar oa localização mesmo se estiver sem conexão com a internet e sincronizar os dados com servidor quando a internet estiver disponível.

## Ferramentas
____
* **📍 _@react-native-community/geolocation_**
* **🛰️ _@react-native-community/netinfo_**
* **📲 _@react-navigation/native-stack_**
* **🍉 _watermelondb_**
* **🔗 _axios_**

## Para executar o app:

+ Clone o projeto:
~~~Bash
git clone https://github.com/igorgoiis/test-ReactNative.git
~~~

+ Acesse a pasta do projeto
~~~Bash
cd ./teste-ReactNative
~~~

+ Instale as dependências do projeto
~~~Bash
# utilizando Yarn
yarn

# utilizando npm
npm install
~~~

+ Execute o metro bundler
~~~Bash
yarn start
~~~

+ Execute o app no emulador ou no seu dispositivo físico:
  + Executar no android:
    ~~~Bash
    yarn run android
    ~~~
  + Executar no ios:
    ~~~Bash
    yarn run ios
    ~~~

![Print Screen](src/assets/exemplo.png)