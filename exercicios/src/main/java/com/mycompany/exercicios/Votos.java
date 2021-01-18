package com.mycompany.exercicios;

import java.math.BigInteger;
import java.text.NumberFormat;

public class Votos {

    private static final BigInteger TOTAL_DE_ELEITORES = new BigInteger("1000");

    private static final BigInteger VOTOS_VALIDOS = new BigInteger("800");
    private static final BigInteger VOTOS_BRANCOS = new BigInteger("150");
    private static final BigInteger VOTOS_NULOS = new BigInteger("50");

    public static void main(String[] args) {
        BigInteger percentualVotoValido = percentualVotoValido(VOTOS_VALIDOS, TOTAL_DE_ELEITORES);
        BigInteger percentualVotoBranco = percentualVotoBranco(VOTOS_BRANCOS, TOTAL_DE_ELEITORES);
        BigInteger percentualVotoNulo = percentualVotoNulo(VOTOS_NULOS, TOTAL_DE_ELEITORES);

        System.out.println("(A) Total de votos :" + TOTAL_DE_ELEITORES.toString());

        System.out.println("(B) Total de validos :" + VOTOS_VALIDOS.toString());
        System.out.println("(C) Total de brancos :" + VOTOS_BRANCOS.toString());
        System.out.println("(D) Total de nulos :" + VOTOS_NULOS.toString());
        
        System.out.println("\n");
        
        System.out.println("(B / A) * 100 ");
        System.out.println("Percentual de votos validos :" + percentualFormat(percentualVotoValido));
        System.out.println();
        System.out.println("(C / A) * 100 ");
        System.out.println("Percentual de votos brancos :" + percentualFormat(percentualVotoBranco));
        System.out.println();
        System.out.println("(D / A) * 100 ");
        System.out.println("Percentual de votos nulos :" + percentualFormat(percentualVotoNulo));
    }

    public static String percentualFormat(BigInteger valor) {
        return NumberFormat.getPercentInstance().format(valor);
    }

    //Percentual de votos validos.
    public static BigInteger percentualVotoValido(BigInteger valor, BigInteger porcentagem) {
        return valor.divide(porcentagem);
    }

    //Percentual de votos brancos.
    public static BigInteger percentualVotoBranco(BigInteger valor, BigInteger porcentagem) {
        return valor.divide(porcentagem);
    }

    //Percentual de votos nulos.
    public static BigInteger percentualVotoNulo(BigInteger valor, BigInteger porcentagem) {
        return valor.divide(porcentagem);
    }

}
