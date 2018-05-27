package algorithm;

public class BinarySearch {
    public static void main(String[] args){
        int search[] ={1,22,33,44,56,67,78,89,90,101};
        System.out.println(binarySearch(search, 22));
    }

    public static int binarySearch(int[] search, int findMe){
        int tail = 0;
        int head = search.length -1;
        while(tail <= head){
            int halfway  = (tail + head)/2;
            if(search[halfway] == findMe){
                return halfway;
            } else if(search[halfway] > findMe){
                head = halfway - 1;
            } else {
                tail  = halfway +1;
            }
        }
        return -1;
    }
}
