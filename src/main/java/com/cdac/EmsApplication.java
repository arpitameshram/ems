//package com.cdac;
//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//@SpringBootApplication
//public class EmsApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(EmsApplication.class, args);
//	}
//
//}
package com.cdac;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmsApplication.class, args);
    }

    // You can define additional configuration or beans specific to the EMS application here
}

@SpringBootApplication
class MailSendApplication {

    public static void main(String[] args) {
        SpringApplication.run(MailSendApplication.class, args);
    }

    // You can define additional configuration or beans specific to the Mail Send application here
}

