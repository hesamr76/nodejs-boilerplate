FROM node:12

RUN apt-get update || : && apt-get install python -y
RUN apt-get update || : && apt-get install python3-pip -y
RUN pip3 install -U scikit-learn
RUN pip3 install numpy

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "node", "./bin/www" ]


