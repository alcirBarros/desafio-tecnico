package com.mycompany.exercicios;

public class Multiplos {

    private static final int MULTIPLO_3 = 3;
    private static final int MULTIPLO_5 = 5;

    public static void main(String[] args) {
        int valor = 10;
        int somar = somar(valor);
        System.out.println("Soma dos multiplos 3 ou 5 para os valores abaixo de "+valor+" e "+somar);
    }

    public static int somar(int valor) {
        int result = 0;
        for (int i = 0; i < valor; i++) {
            if (i % MULTIPLO_3 == 0 || i % MULTIPLO_5 == 0) {
                result = result+i;
            }
        }
        return result;
    }

}
