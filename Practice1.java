import java.util.*;

class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        String vowels = "";
        String constants = "";

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLetter(c)) {
                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                    vowels += input.charAt(i);
                } else {
                    constants += input.charAt(i);
                }
            }
        }
        System.out.println("Vowels in the string : " + vowels);
        System.out.println("Constants in the string : " + constants);
    }
}