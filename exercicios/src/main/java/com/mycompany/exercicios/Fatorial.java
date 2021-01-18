package com.mycompany.exercicios;

import java.util.stream.IntStream;

public class Fatorial {

    public static void main(String[] args) {
        int valor = 5;
        long fatorial = fatorial(5);
        StringBuilder result = new StringBuilder();
        result.append("O fatorial de ").append(valor).append(" : ").append(fatorial);
        System.out.println(result.toString());
    }



    /**
     * Calcula o valor do fatorial para um número qualquer positivo.
     *
     * @param x - valor que será calculado o fatorial.
     * @return O valor do fatorial.
     */
    public static int fatorial(int x) {
        // Se x for igual a 0 (zero) então retorna 1.
        if (x == 0) {
            return 1;
        }

        /* Para qualquer outro número, calcula o seu valor multiplicado pelo fatorial de seu antecessor. */
        return x * fatorial(x - 1);
    }
    
    public static long fatorialStream(int n) {
        return IntStream.rangeClosed(1, n).reduce(1, (int x, int y) -> x * y);
    }
}
