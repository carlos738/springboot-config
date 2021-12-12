package com.digitalinnovationone.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
class HelloController {

    @GetMapping
    public String helloWorld() {
        return "Hello, Digital Innovation One!";
    }

}
