import java.util.Scanner;

// Parent class
class Payment {
    void pay(double amount) {
        System.out.println("Processing generic payment of ₹" + amount);
    }
}

// Subclass 1
class UPI extends Payment {
    void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using UPI.");
    }
}

// Subclass 2
class CreditCard extends Payment {
    void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Credit Card.");
    }
}

// Subclass 3
class NetBanking extends Payment {
    void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Net Banking.");
    }
}

public class JavaFile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("🔐 Welcome to SmartPay Portal!");
        System.out.print("Enter amount to pay: ₹");
        double amount = scanner.nextDouble();

        System.out.println("Choose Payment Method:");
        System.out.println("1. UPI");
        System.out.println("2. Credit Card");
        System.out.println("3. Net Banking");
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();

        Payment payment;

        switch (choice) {
            case 1:
                payment = new UPI();
                break;
            case 2:
                payment = new CreditCard();
                break;
            case 3:
                payment = new NetBanking();
                break;
            default:
                System.out.println("Invalid choice. Defaulting to generic payment.");
                payment = new Payment();
        }

        payment.pay(amount);
        System.out.println("✅ Payment Completed. Thank you!");
        
        scanner.close();
    }
}
