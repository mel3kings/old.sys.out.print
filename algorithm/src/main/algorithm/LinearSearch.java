package algorithm;

public class LinearSearch {

    public static void main(String[] args){
        int[] a = {3,5,79,13,789,12,6,8};
        int x = 12;
        System.out.println(search(a,x));
    }

    public static int search(int[] a, int x){
        for(int i = 0; i< a.length; i++){
            if(a[i] == x){
                return i;
            }
        }
        return -1;
    }
}
