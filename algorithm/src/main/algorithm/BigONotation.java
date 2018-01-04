package algorithm;


import java.util.List;

public class BigONotation {

    public static void main(String[] args) throws Exception {
        System.out.println(Fibonacci(30));

    }

    private static boolean isNull(String empty) {
        return empty == null;
    }

    private static void isNull(List<String> empty) {
        for (String data : empty) {
            System.out.println("processing " + data);
            for (String nested : empty) {
                System.out.println("processing again " + nested);
            }
        }
    }

    private static int Fibonacci(int number) {
        if (number <= 1) return number;
        return Fibonacci(number - 2) + Fibonacci(number - 1);
    }
}
