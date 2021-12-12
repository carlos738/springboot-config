package com.digitalinnovationone.springboot.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController("/")
public class HellowController {

    @GetMapping("/")
    public String HelloMessage(){
        return "Hello, Digital Innovation One!";
    }
}
