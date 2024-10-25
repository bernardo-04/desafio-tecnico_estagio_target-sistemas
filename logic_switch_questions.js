/*
  4) Descubra a lógica e complete o próximo elemento:
    a) 1, 3, 5, 7, ___ => 1, 3, 5, 7, 9
    b) 2, 4, 8, 16, 32, 64, ____ => 2, 4, 8, 16, 32, 64, 128
    c) 0, 1, 4, 9, 16, 25, 36, ____ => 0, 1, 4, 9, 16, 25, 36, 49
    d) 4, 16, 36, 64, ____ => 4, 16, 36, 64, 100
    e) 1, 1, 2, 3, 5, 8, ____ => 1, 1, 2, 3, 5, 8, 13
    f) 2,10, 12, 16, 17, 18, 19, ____ => 2, 10, 12, 16, 17, 18, 19, 20

  5) Você está em uma sala com três interruptores, cada um conectado a uma    lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

  Primeira situação:
  1. Eu ligo um dos interruptores e vou em uma sala, se a lâmpada estiver acesa eu já descobri a lâmpada do primeiro interruptor, agora eu desligo esse primeiro, ligo outro e vou em outra sala, nessa outra sala se a lâmpada estiver acesa eu já descobri o segundo interruptor e o terceiro que sobrou é da outra lâmpada;
  2. Caso a segunda lâmpada não estiver acesa, eu sei que o segundo interruptor é da terceira sala e o outro interruptor que tinha sobrado é dessa segunda sala, logo resolvi o problema.

  Segunda situação:
  1. Eu ligo um dos interruptores e vou em uma sala, se a lâmpada não estiver acesa, eu desligo esse interruptor;
  2. Ligo outro e vou em outra sala, se a lâmpada estiver acesa eu descobri o interruptor dessa lâmpada, logo, o primeiro interruptor que não era da primeira sala, será da terceira sala, e o que nunca foi aceso será da primeira sala.
  3. Se ao chegar na segunda sala e lâmpada não tiver acesa, mas estiver quente, o primeiro interruptor era dela, esse segundo que foi aceso é da terceira sala e o que sobrou é da segunda sala.
  4. Caso a segunda lâmpada esteja fria e apagada, o interruptor que nunca foi aceso é dessa sala, esse é da primeira, e o primeiro que foi aceso é da terceira sala.
 */

