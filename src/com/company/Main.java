package com.company;


import java.net.Authenticator;
import java.net.PasswordAuthentication;

import java.util.Scanner;

public class Main {


    public static void main(String[] args) {



        final String rpcuser="rpcuser";
        final String rpcpassword ="rpcpassword";

        Authenticator.setDefault(new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(rpcuser, rpcpassword.toCharArray());
            }
        });


        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();

        if(command.equals("get balance")){

        }else if(command.equals("get new address")){


        }else if(command.equals("send bitcoins")){

            System.out.println("Amount to send");
            int amount = scanner.nextInt();

        }else if(command.equals("unspent transactions")){

        }


    }



}
