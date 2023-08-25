import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char operator;
        double num1, num2, result;
        boolean continueCalculating = true;

        System.out.println("Selamat datang di Kalkulator Sederhana!");
        System.out.println("Operasi yang dapat dilakukan: +, -, *, /");

        while (continueCalculating) {
            System.out.print("Masukkan angka pertama: ");
            num1 = scanner.nextDouble();

            System.out.print("Masukkan operator (+, -, *, /): ");
            operator = scanner.next().charAt(0);

            System.out.print("Masukkan angka kedua: ");
            num2 = scanner.nextDouble();

            if (operator == '+') {
                result = num1 + num2;
            } else if (operator == '-') {
                result = num1 - num2;
            } else if (operator == '*') {
                result = num1 * num2;
            } else if (operator == '/') {
                result = num1 / num2;
            } else {
                System.out.println("Operator tidak valid");
                continue;
            }

            System.out.println("Hasil dari : " + num1 + operator + num2 + " = " + result);

            System.out.print("Apakah Anda ingin melakukan operasi lain? (y/n): ");
            char choice = scanner.next().charAt(0);
            if (choice != 'y') {
                continueCalculating = false;
            }
        }

        System.out.println("Terima kasih telah menggunakan Kalkulator Sederhana!");
        scanner.close();
    }
}
