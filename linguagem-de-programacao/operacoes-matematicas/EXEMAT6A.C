/* Exemplo de conversao de tipos em operacoes matematicas.
   Opera��es com operandos do mesmo tipo, o resultado � do mesmo tipo.
   Ou seja, neste caso, int com int d� int.

   N�o � um erro, e sim uma caracter�stica da linguagem C.            */

#include<stdio.h>

int main(){
   float media;
   media = 5/2;
   printf("\nO valor calculado foi %f",media);
   return 0;
}

