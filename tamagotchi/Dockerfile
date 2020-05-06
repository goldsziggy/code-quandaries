FROM alpine
COPY . /tamagotchi
RUN touch /tamagotchi/last_run && touch /tamagotchi/birtdate && touch /tamagotchi/health && /tamagotchi/last_eat

ENTRYPOINT [ "/tamagotchi/tamagotchi.sh" ]