package algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Stack;

public class Balanced {
    public static void main(String[] args) {
        ArrayList<String> testme = new ArrayList(Arrays.asList("{}{}{}{}{}{}()()()[][][]", "[[[[[[[[]]]]]]]()]","[[[]]]}", "({[]})", "{{{(())}}}", "[{{]})", "(){}[]", "{{{()}}}[]{{}}[][][][][][][][]","", null));
        testme.forEach(value -> System.out.println(checkBalance(value)));
        print("NEW WAY");
        testme.forEach(value -> System.out.println(checkBalanceNew(value)));
    }

    private static void print(Object o) {
        System.out.println(o.toString());
    }

    private static String checkBalanceNew(String expr) {
        Stack<Character> stack = new Stack<>();
        try {
            if (null == expr || expr.length() == 1 || expr.length() == 0) {
                return "NO";
            }
            expr.chars().mapToObj(character -> (char) character)
                    .map(analyze -> {
                        if (analyze == '[' || analyze == '{' || analyze == '(') {
                            stack.push(analyze);
                        }
                        return analyze;
                    }).forEach(analyze -> {
                        if (!stack.empty()) {
                            char compare = stack.peek();
                            if ((compare == '[' && analyze == ']') || (compare == '{' && analyze == '}') || (compare == '(' && analyze == ')')) {
                                stack.pop();
                            }
                        } else {
                            throw new IllegalArgumentException();
                        }
                    });
        } catch (IllegalArgumentException iae) {
            return "NO";
        } catch (Exception ex) {
            return "NO";
        }

        if (stack.isEmpty()) {
            return "YES";
        } else {
            return "NO";
        }
    }

    private static String checkBalance(String wholeExpression) {
        Stack<Character> stack = new Stack<Character>();
        boolean inserted = false;
        if (null == wholeExpression || wholeExpression.length() == 1 ||  wholeExpression.length() == 0) {
            return "NO";
        }
        for (int x = 0; x < wholeExpression.length(); x++) {
            char analyze = wholeExpression.charAt(x);
            if (analyze == '[' || analyze == '{' || analyze == '(') {
                inserted = true;
                stack.push(analyze);
            } else if (analyze == ']' || analyze == '}' || analyze == ')') {
                if (!stack.empty()) {
                    char compare = stack.peek();
                    if (compare == '[' && analyze == ']') {
                        stack.pop();
                    } else if (compare == '{' && analyze == '}') {
                        stack.pop();
                    } else if (compare == '(' && analyze == ')') {
                        stack.pop();
                    }
                } else {
                    return "NO";
                }
            }
        }
        if (!inserted) {
            return "NO";
        } else if (stack.isEmpty()) {
            return "YES";
        } else {
            return "NO";
        }
    }
}

